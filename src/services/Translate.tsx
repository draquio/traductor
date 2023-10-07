import { ENV } from "../utils/constants";

export class Translate {
  async translatetext(texttotranslate: string, Language:string = "EN") {
    const url = `${ENV.Api_url}?to%5B0%5D=${Language}&api-version=3.0&profanityAction=NoAction&textType=plain`;
    const options: RequestInit = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": ENV.Api_key,
        "X-RapidAPI-Host": ENV.Api_host,
      },
      body: JSON.stringify([
        {
          Text: texttotranslate,
        },
      ]),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const resultJson = JSON.parse(result);
      if (resultJson[0].translations.length > 0) {
        // console.log(resultJson[0].translations[0].text);
        return resultJson[0].translations[0].text;
        return
      }
      return "No se pudo traducir";
    } catch (error) {
      console.error(error);
    }
  }
}
export default Translate;
