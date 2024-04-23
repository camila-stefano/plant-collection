import Layout from "../components/Layout";
import usePlants from "../hooks/usePlants";


const Explore = () => {
  const { data } = usePlants();

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <h1>Explore</h1>
        {data && (
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
