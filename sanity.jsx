import {createClient} from "@sanity/client";
import ImageBuilder from "@sanity/image-url";

export const client = createClient({
    projectId:'82xntmvx',
    dataset:'production',
    useCdn:true,
    apiVersion:'2023-10-05'
})

const builder = ImageBuilder(client);
export const urlFor = source=>builder.image(source);