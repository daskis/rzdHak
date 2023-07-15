import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
// импортируем стили mapbox-gl чтобы карта отображалась коррекно
const routes = [
    {
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
            [43.447729167898025, 39.904162196490034],
        ]
    }
]

function MapPage() {
    // здесь будет хранится инстанс карты после инициализации
    const [map, setMap] = React.useState<mapboxgl.Map>();

    // React ref для хранения ссылки на DOM ноду который будет
    // использоваться как обязательный параметр `container`
    // при инициализации карты `mapbox-gl`
    // по-умолчанию будет содержать `null`
    const mapNode = React.useRef(null);
    const options = [
        {
            value: 'msk-adl',
            label: 'Москва — Адлер',
        },
        {
            value: 'msk-bel',
            label: 'Москва — Белгород',
        },
        {
            value: 'msk-spb',
            label: 'Москва — Санкт-Петербург',
        },
    ]
    React.useEffect(() => {
        const node = mapNode.current;
        // если объект window не найден,
        // то есть компонент рендерится на сервере
        // или dom node не инициализирована, то ничего не делаем
        if (typeof window === "undefined" || node === null) return;

        // иначе создаем инстанс карты передавая ему ссылку на DOM ноду
        // а также accessToken для mapbox
        const mapboxMap = new mapboxgl.Map({
            minZoom: 5,
            container: node,
            accessToken: "pk.eyJ1IjoicGxhbmVtYWQiLCJhIjoiemdYSVVLRSJ9.g3lbg_eN0kztmsfIPxa9MQ",
            style: "mapbox://styles/planemad/ck7p3wxmp0q571imu99elwqs1",
            center: [39.0448, 45.026],
            zoom: 12,
            locale: {
                language: "ru"
            }
        });
        if (mapboxMap) {
            routes[0].coordinates.map(item => {
                const marker = new mapboxgl.Marker({color: "#cf1322"}).setLngLat([item[1], item[0]]).addTo(mapboxMap);
            })
        }


        // и сохраняем созданный объект карты в React.useState
        setMap(mapboxMap);

        // чтобы избежать утечки памяти удаляем инстанс карты
        // когда компонент будет демонтирован
        return () => {
            mapboxMap.remove();
        };
    }, []);

    return <div ref={mapNode} style={{width: "100%", height: "100%"}}>
        <SelectComponent options={options} placeholder={"Выберите маршрут"} onMap={true}/>
    </div>;
}

export default MapPage;