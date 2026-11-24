// Fictional permission repair exercise; no live systems.
export const permissions=Object.freeze(['read','write','admin']);
export function assess(grants,required){
 if(!Array.isArray(grants)||!Array.isArray(required)||[...grants,...required].some(x=>!permissions.includes(x)))throw new TypeError('Invalid permission');
 const actual=new Set(grants),need=new Set(required);
 const excess=[...actual].filter(x=>!need.has(x));
 const missing=[...need].filter(x=>!actual.has(x));
 return {excess,missing,passed:!excess.length&&!missing.length};
}
