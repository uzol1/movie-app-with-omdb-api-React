import { useState, useEffect } from 'react';
import Movies from '../component/movies'
import Search from '../component/search'
import MovieDetail from '../component/movieDetail'
import 'antd/dist/antd.css';
import axios from 'axios'
import {
    Row,
    Layout,
    Modal,
} from 'antd';



const Home = (props) => {
    const { Header, Content, } = Layout;
    const [searchValue, setSearchValue] = useState(null);
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [visible, setVisible] = useState(false)
    const [detail, setDetail] = useState(false);

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?s=${searchValue ? searchValue : 'batman'}&apikey=3d018ec`).then(response => {
            console.log(response.data.Search)
            setData(response.data.Search)
        }).catch(({ message }) => {
            setError(message);
        })
    }, [searchValue])

    const clickedHandler = (id) => {
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=3d018ec`).then(response => {
            setDetail(response.data)

        })
        setVisible(true)
    }
    let movies = null;
    if (data) {
        movies = data.map(movie => {
            return <Movies Movie={movie} key={movie.imdbID} clicked={() => { clickedHandler(movie.imdbID) }}></Movies>
        })
    }
    else {
        movies = <h1>{error}error!! no movie found <br />please enter another name</h1>

    }


    const handler = (props) => {
        setSearchValue(props)
    }

    return (
        <>
            <Header> home</Header>
            <Content style={{ padding: '0 50px' }}>

                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Search searchHandler={handler}></Search>
                    <Row gutter={16} type="flex" justify="center">
                        {movies}
                    </Row>
                </div>
                <Modal
                    title='Detail'
                    centered
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    footer={null}
                    width={800}
                >
                    <MovieDetail {...detail} />
                </Modal>
            </Content>
        </>
    );
}
export default Home;