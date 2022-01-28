export const mapsRecord: Record<string, string> = {
  //To be photos like https://media.valorant-api.com/maps/2C9D57EC-4431-9C5E-2939-8F9EF6DD5CBA/listviewicon.png or
  // /splash.png
  Ascent: "7EAECC1B-4337-BBF6-6AB9-04B8F06B3319",
  Split: "D960549E-485C-E861-8D71-AA9D1AED12A2",
  Fracture: "B529448B-4D60-346E-E89E-00A4C527A405",
  Bind: "2C9D57EC-4431-9C5E-2939-8F9EF6DD5CBA",
  Breeze: "2FB9A4FD-47B8-4E7D-A969-74B4046EBD53",
  Icebox: "E2AD5C54-4114-A870-9641-8EA21279579A",
  Haven: "2BEE0DC9-4FFE-519B-1CBD-7FBE763A6047",
};

export function mapSelector(mapData: string) {
  return mapsRecord[mapData];
}
