import {createClient} from '@sanity/client';
import { client } from './sanity';


let sanityQuery = (query,params) =>client.fetch(query,params);

export const getCarInfo = () =>{
    return sanityQuery(`
    *[_type == 'post']{
        ...,
        brand[]->{
            ...,
        },
        transmission[]->{
            ...,
        },
        availability[]->{
            ...,
        },
        fuel[]->{
            ...,
        }
           
    }
    `)
}

export const getBrands = () =>{
    return sanityQuery(`
    *[_type == 'brand']{
        ...,
        category[]->{
            ...,
        },
        author[]->{
            ...,
        }
           
    }
    `)
}