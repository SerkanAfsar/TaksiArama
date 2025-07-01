import { GetCityDetailResultService } from "@/Services/CityService";
import { ResponseResult } from "@/Types";
import { envVariables } from "@/Utils";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req: NextRequest) {
  const clientId = req.headers.get("ClientId");
  const clientSecret = req.headers.get("ClientSecret");
  if (
    clientId != envVariables.NEXT_PUBLIC_CLIENT_ID ||
    clientSecret != envVariables.NEXT_PUBLIC_CLIENT_SECRET
  ) {
    const result: ResponseResult<any> = {
      success: false,
      statusCode: 403,
      errors: ["Forbidden"],
    };
    return NextResponse.json({ result }, { status: 403 });
  }
  const { cityName } = await req.json();
  const name = slugify(String(cityName).toLocaleLowerCase());

  const result = await GetCityDetailResultService({ citySlugText: name });
  return NextResponse.json(result, { status: result.statusCode });
}
