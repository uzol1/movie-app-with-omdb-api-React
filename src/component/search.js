import {

    Input,
    Row,
    Col,


} from 'antd';
const Search = (props) => {
    const { Search } = Input;

    return (
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="enter movie, series, episode name"
                        enterButton="Search"
                        size="large"
                        onSearch={value => { props.searchHandler(value) }}
                    />
                </Col>
            </Row>
        </div>
    );
}
export default Search;