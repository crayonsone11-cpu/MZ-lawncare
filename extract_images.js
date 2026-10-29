import fs from 'fs';

function extractUrls(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    return (data.results || []).map(r => ({
      id: r.id,
      desc: r.description || r.alt_description || '',
      url: r.urls?.regular || r.urls?.small,
      thumb: r.urls?.thumb
    }));
  } catch (e) {
    return [];
  }
}

const s62 = extractUrls('C:\\Users\\PC\\.gemini\\antigravity-ide\\brain\\fa2a2aec-3018-4109-8d59-7dd49b98c72d\\.system_generated\\steps\\62\\output.txt');
const s66 = extractUrls('C:\\Users\\PC\\.gemini\\antigravity-ide\\brain\\fa2a2aec-3018-4109-8d59-7dd49b98c72d\\.system_generated\\steps\\66\\output.txt');
const s68 = extractUrls('C:\\Users\\PC\\.gemini\\antigravity-ide\\brain\\fa2a2aec-3018-4109-8d59-7dd49b98c72d\\.system_generated\\steps\\68\\output.txt');

console.log('Lawn photos:', s62.length);
console.log('Snow photos:', s66.length);
console.log('Gardener photos:', s68.length);

fs.writeFileSync('C:\\Users\\PC\\Desktop\\Landscape 2\\images.json', JSON.stringify({
  lawn: s62,
  snow: s66,
  gardener: s68
}, null, 2));
