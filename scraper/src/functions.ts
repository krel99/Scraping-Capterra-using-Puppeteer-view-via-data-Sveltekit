import fs from 'fs';
import path from 'path';

export function saveAsJsonAtRoot(data: Object) {
    fs.writeFileSync(path.join(process.cwd(), '..', 'data.json'), JSON.stringify(data));
    console.log('done');
}
