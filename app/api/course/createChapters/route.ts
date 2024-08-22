// api/course/createChapters

import { NextResponse } from "next/server";
import { createChaptersSchema} from "@/validator/course";

export async function POST (req:Request,res:Response){

 try {
   const body=await req.json();
   const {title,units}=await createChaptersSchema.parse(body);


   type OutputUnits={
    title:string;
    chapters:{
        youtube_serch_query:string;
        chapter_title:string;

    }[];
   };


 }
 catch (error) {
   if (error instanceof Error) {
     return NextResponse.json({error: 'Invalid body'}, {status: 400});

   }
 }




}