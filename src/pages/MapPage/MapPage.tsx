import * as React from "react";
import mapboxgl from "mapbox-gl";
import ReactDOMServer from "react-dom/server";
import "mapbox-gl/dist/mapbox-gl.css";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import {Button, Typography} from "antd";
import {Link, BrowserRouter} from "react-router-dom";
import {useGetMapInfoQuery} from "../../features/api/mapApi";

const routes = [
    {
        stationId: 1,
        name: "msk-adl",
        coordinates: [
            [54.62907498969296, 39.70110112172397],
            [52.9019084919312, 40.45168472460575],
            [52.494402214908746, 39.94521911236009],
            [51.64029592124457, 39.25859122764738],
            [50.99665102793458, 39.511590650331705],
            [50.183603226610735, 39.59402415630284],
            [47.218719208723655, 39.69074973718584],
            [45.01870540231077, 38.987139267741505],
            [44.64676607708154, 39.126155811886306],
            [44.09823149557623, 39.083363381335175],
            [43.91507978057659, 39.3203102240886],
            [43.593869921385924, 39.72810603179891],
            [43.511959520147784, 39.86379257612086],
            [43.447729167898025, 39.904162196490034]
        ]
    }
];

const CustomPopupContent = ({stationId, name}: { stationId: number, name: string }) => {
    return (
        <BrowserRouter>
            <div>
                <Typography.Title level={3}>{name}</Typography.Title>
                <Typography.Text>Кол-во свободных вагонов:
                    <span style={{fontSize: "1.2em", fontWeight: 500}}>6</span>
                </Typography.Text>
                <Link to={`/station/${stationId}`}>
                    <Button type={"primary"}>Показать подробнее</Button>
                </Link>
            </div>
        </BrowserRouter>
    );
};

function MapPage() {
    // @ts-ignore
    const {data, error, isLoading} = useGetMapInfoQuery();
    const [map, setMap] = React.useState<mapboxgl.Map>();
    const mapNode = React.useRef(null);
    const options = [
        {
            value: "msk-adl",
            label: "Москва — Адлер"
        },
    ];

    React.useEffect(() => {
        const node = mapNode.current;
        if (typeof window === "undefined" || node === null) return;

        const mapboxMap = new mapboxgl.Map({
            minZoom: 5,
            container: node,
            accessToken:
                "pk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiemdYSVVLRSJ9.g3lbg_eN0kztmsfIPxa9MQ",
            style: "mapbox://styles/planemad/ck7p3wxmp0q571imu99elwqs1",
            center: [39.0448, 45.026],
            zoom: 12,
            locale: {
                language: "ru"
            }
        });

        if (mapboxMap) {
            routes[0].coordinates.map(item => {
                const marker = new mapboxgl.Marker({color: "#cf1322"})
                    .setLngLat([item[1], item[0]])
                    .addTo(mapboxMap);
                marker.getElement().style.cursor = "pointer";
                marker.getElement().addEventListener("click", () => {
                    const popup = new mapboxgl.Popup({offset: 25})
                        .setLngLat([item[1], item[0]])
                        .setHTML(
                            ReactDOMServer.renderToString(
                                <CustomPopupContent stationId={routes[0].stationId} name="Custom Popup"/>
                            )
                        )
                        .addTo(mapboxMap);
                    marker.setPopup(popup);
                });
            });
        }

        setMap(mapboxMap);

        return () => {
            mapboxMap.remove();
        };
    }, []);

    return (
        <div style={{width: "100%", height: "100%", position: "relative"}}>
            <div ref={mapNode} style={{width: "100%", height: "calc(100vh - 50px)"}}/>
            <SelectComponent defaultValue={{value: "msk-adl", label: "Москва — Адлер"}} options={options} placeholder={"Выберите маршрут"} onMap={true}/>
        </div>
    );
}

export default MapPage;
