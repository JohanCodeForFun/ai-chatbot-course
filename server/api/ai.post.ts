import { OpenAI } from "openai";

 export default defineEventHandler(async (event) => {
   const { OPENAI_API_KEY } = useRuntimeConfig();

  //  const configuration = new Configuration({
  //    apiKey: OPENAI_API_KEY,
  //  });
   const openai = new OpenAI();

   const completion = await openai.chat.completions.create({
     model: "gpt-3.5-turbo",
     messages: [{ role: "user", content: "Hello world" }],
   });
   return completion;
 });