import Layout from "../components/Layout";
import usePlants from "../hooks/usePlants";

const Explore = () => {
  const { data, loading } = usePlants();

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1>Explore Gallery</h1>
      </div>
      <div className="flex flex-col gap-4">
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className="flex flex-wrap gap-4">
            {data?.map((plant) =>  (
                <div
                  key={plant.id}
                  className="w-40 rounded-small overflow-hidden"
                >
                  <img
                    className="object-cover"
                    src={plant.default_image?.thumbnail}
                  />
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
