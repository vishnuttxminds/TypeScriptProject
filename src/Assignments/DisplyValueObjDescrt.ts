const item = {
  nameItem: "shoes",
  size: {
    EU: 44,
    US: 18,
  },
  statusItem: "live",
};

const {
  nameItem,
  size,
  statusItem,
  size: { EU, US },
} = item;

console.log('Item Name : ' + nameItem);
console.log('Item size : ' + JSON.stringify(size));
console.log('Item statusItem : ' + statusItem);
console.log('size EU : ' + EU);
console.log('size US : ' + US);
