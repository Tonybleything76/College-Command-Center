#!/usr/bin/env python3
"""Inline src/ into a single self-contained index.html.

One file means nothing can 404, and it works opened straight from disk.
Output goes to index.html (repo root) and site/index.html so the page
serves correctly whatever root directory the host is set to.
"""
import re, pathlib
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
html = re.sub(r'<link rel="stylesheet" href="app\.css">',
              lambda m: '<style>\n' + css + '\n</style>', html, count=1)
html = re.sub(r'<script type="module" src="app\.js"></script>',
              lambda m: '<script>\n' + js + '\n</script>', html, count=1)

for out in [root / 'index.html', root / 'site' / 'index.html',
            root / 'app' / 'callboard-offline.html']:
    out.write_text(html)
print(f'built {len(html)} bytes -> index.html, site/index.html, app/callboard-offline.html')
