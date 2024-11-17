import { ENV } from "../utils/constants";

export class Translate {
  async translatetext(textToTranslate: string, Language: string = "en") {
    const url = `${ENV.Api_url}`;
    const options: RequestInit = {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": ENV.Api_key,
        "X-RapidAPI-Host": ENV.Api_host,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          "from": "auto",
          "to": Language,
          "text": textToTranslate
        }
      ),
    };
    try { 
      const response = await fetch(url, options);
      const result = await response.text();
      const resultJson = JSON.parse(result);
      if (response.status === 200) {
        return resultJson.trans;
      }
      throw response;
    } catch (error) {
      throw new Error("No se pudo traducir");
    }
  }
}

export default Translate;
