import { useEffect, useState } from "react";

const token = import.meta.env.VITE_PERENUAL_TOKEN;

const usePlants = () => {
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://perenual.com/api/species-list?key=${token}&page=1`
      );
      const resp = await response.json();

      /* {
          id: 1,
          common_name: 'European Silver Fir',
          scientific_name: [ 'Abies alba' ],
          other_name: [ 'Common Silver Fir' ],
          cycle: 'Perennial',
          watering: 'Frequent',
          sunlight: [ 'full sun' ],
          default_image: {
            license: 45,
            license_name: 'Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)',
            license_url: 
              'https://creativecommons.org/licenses/by-sa/3.0/deed.en',
            original_url: 
              'https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_SkalitC3A9.jpg',
            regular_url: 
              'https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_SkalitC3A9.jpg',
            medium_url: 
              'https://perenual.com/storage/species_image/1_abies_alba/medium/1536px-Abies_alba_SkalitC3A9.jpg',
            small_url: 
              'https://perenual.com/storage/species_image/1_abies_alba/small/1536px-Abies_alba_SkalitC3A9.jpg',
            thumbnail: 
              'https://perenual.com/storage/species_image/1_abies_alba/thumbnail/1536px-Abies_alba_SkalitC3A9.jpg'
          }
        } */

      setData(resp.data);
      setImages(resp.images);
      setLoading(false);
    };

    getData();
  }, []);

  console.log(data)

  return { data, images, loading };
};

export default usePlants;
