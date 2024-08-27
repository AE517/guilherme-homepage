import { XMLParser, XMLValidator } from "fast-xml-parser"

export default async function (data: string) {
  if(XMLValidator.validate(data)) {  
    const parser = new XMLParser()
    let posData = parser.parse(data)

    //Response -> rss -> channel -> item (gallery) : Array of Objects
    return posData.rss.channel.item
  }
}
