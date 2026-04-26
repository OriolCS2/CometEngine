const fs = require('fs');

async function test() {
  const files = [
    './website/public/docs/CometEngine.xml',
    './website/public/docs/CometEngineAdditionals.xml',
    './website/public/docs/CometEngineGlobals.xml'
  ];
  const namespaces = {};

  for (const file of files) {
    const xmlText = fs.readFileSync(file, 'utf8');
    // Simple regex to extract <member name="...">...</member>
    const memberRegex = /<member\s+name="([^"]+)"([^>]*)>([\s\S]*?)<\/member>/g;
    let match;

    while ((match = memberRegex.exec(xmlText)) !== null) {
      const fullName = match[1];
      const attributes = match[2];
      const innerContent = match[3];
      
      const typePrefix = fullName[0];
      const cleanName = fullName.substring(2);
      
      const nameWithoutSig = cleanName.split('(')[0];
      const parts = nameWithoutSig.split('::');

      let current = namespaces;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isLast = i === parts.length - 1;

        if (isLast && typePrefix !== 'T') {
          if (!current._members) current._members = [];
          current._members.push({ type: typePrefix, name: part, fullName });
        } else {
          if (!current[part]) current[part] = {};
          current = current[part];
          if (isLast) {
            if (!current._members) current._members = [];
            current._members.push({ type: typePrefix, name: part, fullName });
          }
        }
      }
    }
  }

  const gui = namespaces['CometEditor']?.['GUI'];
  if (gui) {
    console.log('GUI members count:', gui._members?.length || 0);
    // Group by type
    const types = {};
    gui._members?.forEach(m => {
      types[m.type] = (types[m.type] || 0) + 1;
    });
    console.log('GUI member types:', types);
    console.log('GUI member names:', gui._members?.map(m => m.name).join(', '));
  } else {
    console.log('GUI not found in tree');
    // Look for parts
    console.log('CometEditor keys:', Object.keys(namespaces['CometEditor'] || {}));
  }
}

test();
