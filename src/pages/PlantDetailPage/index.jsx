// IMPORTS
import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";


export default function PlantDetailPage() {
  const [plantDetail, setPlantDetail] = useState(null);
  const [plantRecommendations, setPlantRecommendations] = useState([]);
  const [plantFeedings, setPlantFeedings] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getAndSetDetail() {
      try {
        const plantData = await plantAPI.show(id);
        setPlantDetail(plantData.plant);
        setPlantRecommendations(plantData.recommendations);
        setPlantFeedings(plantData.feedings);
      } catch (err) {
        console.log(err);
        setPlantDetail(null);
      }
    }
    if (id) getAndSetDetail();
  }, [id]);

  async function addPhoto(plantId, formData) {
    try {
      const updatedPlant = await plantAPI.addPhoto(plantId, formData);
      setPlantDetail(updatedPlant);
    } catch (err) {
      console.log(err);
      setPlantDetail({ ...plantDetail });
    }
  }

  if (!plantDetail) return <h3>Loading plant details...</h3>;

  return (
    <>
      <section className="detail-plant-container">
        <div className="detail-plant-img">
          {plantDetail.photo?.url
            ? <img src={plantDetail.photo.url} alt={`A photo of ${plantDetail.name}`} className="usr-img" />
            : <img src={plantImage} alt="Plant" />
          }
        </div>
        <div className="plant-details">
          <h1>{plantDetail.name}</h1>
          <h2>{plantDetail.type}</h2>
          <p>{plantDetail.description}</p>
          <div className="plant-actions">
            <Link to={`/plants/edit/${plantDetail.id}`} className="btn warn">Edit</Link>
            <Link to={`/plants/confirm_delete/${plantDetail.id}`} className="btn danger">Delete</Link>
          </div>
        </div>
        <section>
          <AddPhotoForm plant={plantDetail} addPhoto={addPhoto} />
        </section>
      </section>
      <div className="plant-recommendations-container">
        <section className="recommendations">
          <div className="subsection-title">
            <h2>Recommendations</h2>
          </div>
          {plantRecommendations.length > 0
            ?
            <ul>
              {plantRecommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
            :
            <p>No recommendations available for this plant.</p>
          }
        </section>

        <section className="feedings">
          <div className="subsection-title">
            <h2>Watering Schedule</h2>
          </div>
          {plantFeedings.length > 0
            ?
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Watering Reminder</th>
                </tr>
              </thead>
              <tbody>
                {plantFeedings.map((feeding, index) => (
                  <tr key={index}>
                    <td>{feeding.date}</td>
                    <td>{feeding.reminder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            :
            <p>No watering schedule available for this plant.</p>
          }
        </section>
      </div>
    </>
  );
}
