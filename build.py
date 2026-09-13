#!/usr/bin/env python3
"""Inline src/ into a single self-contained index.html.

One file means nothing can 404, and it works opened straight from disk.
Output goes to index.html (repo root) and site/index.html so the page
serves correctly whatever root directory the host is set to.
"""
import re, pathlib, hashlib
root = pathlib.Path(__file__).parent
src  = root / 'src'

def strip_modules(p):
    t = (src / p).read_text()
    t = re.sub(r'^\s*import\s+\{[^}]*\}\s+from\s+[\'"][^\'"]+[\'"];\s*$', '', t, flags=re.M)
    return re.sub(r'^export\s+(const|function)\b', r'\1', t, flags=re.M)

js  = "\n".join(strip_modules(f) for f in
                ['data.js', 'essays.js', 'xlsx.js', 'app.js'])
css = (src / 'app.css').read_text()
html = (src / 'index.html').read_text()

# Stamp the build so anyone can tell at a glance which version they are
# looking at - browser cache and stale deploys are otherwise invisible.
#
# This is a hash of the sources, NOT a timestamp, and that matters: the same
# src/ must always produce a byte-identical page. A clock in here meant every
# rebuild rewrote all three outputs even when nothing had changed, so `git
# status` could never answer "is the committed page stale?" - the one question
# it needs to answer. The hash also says more than a time did: same stamp means
# genuinely the same page, and a differing stamp means the content really moved.
# A commit SHA can't work here - this build isn't committed yet, so it would
# always name the previous commit.
stamp = hashlib.sha256((js + css + html).encode()).hexdigest()[:8]
html = html.replace('{{BUILD}}', stamp)
html = re.sub(r'<link rel="stylesheet" href="app\.css">',
              lambda m: '<style>\n' + css + '\n</style>', html, count=1)
html = re.sub(r'<script type="module" src="app\.js"></script>',
              lambda m: '<script>\n' + js + '\n</script>', html, count=1)

for out in [root / 'index.html', root / 'site' / 'index.html',
            root / 'app' / 'callboard-offline.html']:
    out.write_text(html)
print(f'built {len(html)} bytes -> index.html, site/index.html, app/callboard-offline.html')
