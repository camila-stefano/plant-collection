import Layout from "../components/Layout";
import usePlants from "../hooks/usePlants";

const Explore = () => {
  const { data, loading } = usePlants();

  return (
    <Layout>
      <div className="flex flex-col font-maison">
        <h2 className="justify-items text-lg text-primaryGreen py-8">Explore Gallery</h2>
      </div>
      <div className="flex flex-col gap-4 font-maison">
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className="flex flex-wrap gap-12 justify-between">
            {data?.map((plant) =>  (
                <div
                  key={plant.id}
                  className="w-72 overflow-hidden	text-primaryGreen shadow-md shadow-secondaryGreen/30 rounded-sm"
                >
                  <img
                    className="object-cover"
                    src={plant.default_image?.small_url}
                  />
                  <p className="text-lg pt-4 px-2">{plant.common_name}</p>
                  <p className="text-sm italic pt-1 px-2 pb-4">{plant.scientific_name}</p>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Explore;
