import { View, Text } from 'react-native';
import {useEffect, useState} from 'react'
import { RestaurantItem } from './item';

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
}

export function RestaurantList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])
 
    useEffect(() => {
        async function getRestaurant() {
            const response = await fetch("http://192.168.1.6:3000/restaurants")
            const data = await response.json()
            setRestaurants(data);
        }

        getRestaurant()
    }, [])
    
 return (
   <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
    {restaurants.map(item => (
        <RestaurantItem item={item} key={item.id}/>
    ))}
   </View>
  );
}