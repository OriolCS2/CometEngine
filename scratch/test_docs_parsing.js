const fs = require('fs');
const { JSDOM } = require('jsdom');

async function test() {
  const files = [
    './website/public/docs/CometEngine.xml',
    './website/public/docs/CometEngineAdditionals.xml',
    './website/public/docs/CometEngineGlobals.xml'
  ];
  const namespaces = {};

  function parseMemberData(member, typePrefix, fullName, name, sigTypes) {
    const xmlParams = Array.from(member.getElementsByTagName('param'));
    const params = xmlParams.map((p, idx) => ({
      name: p.getAttribute('name'),
      type: sigTypes[idx] || null,
      desc: p.textContent.trim(),
      default: p.getAttribute('default'),
    }));
    const rType = member.getAttribute('return');
    const fType = member.getAttribute('type');
    return { type: typePrefix, name, params, returnType: rType, fieldType: fType };
  }

  for (const file of files) {
    const xmlText = fs.readFileSync(file, 'utf8');
    const dom = new JSDOM(xmlText, { contentType: "text/xml" });
    const xmlDoc = dom.window.document;
    const members = xmlDoc.getElementsByTagName('member');

    for (const member of members) {
      const fullName = member.getAttribute('name');
      const typePrefix = fullName[0];
      const cleanName = fullName.substring(2);
      const sigMatch = cleanName.match(/\(([^)]*)\)/);
      const sigTypes = sigMatch && sigMatch[1] ? sigMatch[1].split(',').map(s => s.trim()).filter(Boolean) : [];
      const nameWithoutSig = cleanName.split('(')[0];
      const parts = nameWithoutSig.split('::');

      let current = namespaces;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        const isLast = i === parts.length - 1;

        if (isLast && typePrefix !== 'T') {
          if (!current._members) current._members = [];
          current._members.push(parseMemberData(member, typePrefix, fullName, part, sigTypes));
        } else {
          if (!current[part]) current[part] = {};
          current = current[part];
          if (isLast) {
            if (!current._members) current._members = [];
            current._members.push(parseMemberData(member, typePrefix, fullName, part, sigTypes));
          }
        }
      }
    }
  }

  const gui = namespaces['CometEditor']?.['GUI'];
  if (gui) {
    console.log('GUI members count:', gui._members?.length || 0);
    console.log('GUI member names:', gui._members?.map(m => m.name).join(', '));
  } else {
    console.log('GUI not found in tree');
  }
}

test();
