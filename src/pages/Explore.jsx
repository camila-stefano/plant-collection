import Layout from "../components/Layout";
import usePlants from "../hooks/usePlants";

const Explore = () => {
  const { data, images, loading } = usePlants();

  return (
    <Layout>
    <div className="flex flex-col gap-4">
        <h1>Explore Gallery</h1>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div>
            {images.map((plant) => (
              <img key={plant.id} src={plant.default_image.original_url} />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <h1>Explore</h1>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <ul>
            {data.map((plant) => (
              <li key={plant.id}>{plant.common_name}</li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default Explore;
