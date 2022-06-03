// API
import api from "../../services/api"

// Hooks
import { useEffect, useState } from "react"

// Tag A + useParams
import { useParams, useNavigate, Link } from "react-router-dom";

// Components
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MenuMobile } from "../../components/MenuMobile"
import { InputSearchPages } from "../../components/InputSearch"
import { DeliveryDetails } from "../../components/DeliveryDetails"

// Icons
import { TiArrowBack } from 'react-icons/ti'
import { MdAttachMoney } from 'react-icons/md'

// Imgs
import LanchesBackground from '../../assets/images/BgImgTop/lanches-background.jpg'

// CSS
import {
    Container, Content, BgEndPoint, BgCards, BgCard,
    ProductInformations, ProductImage, SideBar, MapCategoryDiv, MobileSideBar, MapCategoryMobileDiv, MobileArrowReturn, BgImgTop, ImgAndInputsearchAndDeliveryDetails
} from "./styles";


export function ProductsFilter() {
    const [products, setProducts] = useState()
    const [categories, setCategories] = useState()
    const routeParams = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if (routeParams.categoryId && routeParams.categoryId !== undefined) {
            api.get(`/products?categoryId=${routeParams.categoryId}`).then((res) => {
                setProducts(res.data.docs)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            api.get(`/products`).then((res) => {
                setProducts(res.data.docs)
            }).catch((err) => {
                console.log(err)
            })
        }
    }, [routeParams])

    useEffect(() => {
        api.get('/categories').then((res) => {
            setCategories(res.data.docs)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    function handleOpenProduct(id) {
        navigate(`/product-listing-for-id/${id}`)
    }

    return (
        <Container>

            <Header />

            <ImgAndInputsearchAndDeliveryDetails>
                <BgImgTop>
                    <img src={LanchesBackground} alt="Company" />
                </BgImgTop>

                <InputSearchPages />

                <DeliveryDetails />
            </ImgAndInputsearchAndDeliveryDetails>

            <Content>

                <MobileArrowReturn>
                    <Link to="/"><TiArrowBack size={30} /></Link>
                </MobileArrowReturn>

                <MobileSideBar>
                    {categories && categories.length ? categories.map(category => {
                        return (
                            <MapCategoryMobileDiv key={category.id}>
                                <Link key={category.id} to={`/products/category/${category.id}`}>{category.name}</Link>
                                <br />
                            </MapCategoryMobileDiv>
                        )
                    }) : (<p></p>)}
                </MobileSideBar>

                <SideBar>
                    <Link to="/"><TiArrowBack size={30} /></Link>

                    {categories && categories.length ? categories.map(category => {
                        return (
                            <MapCategoryDiv key={category.id}>
                                <Link key={category.id} to={`/products/category/${category.id}`}>{category.name}</Link>
                                <br />
                            </MapCategoryDiv>
                        )
                    }) : (<p></p>)}
                </SideBar>

                <BgEndPoint>
                    <BgCards>
                        {products && products.map((product) => (
                            <div key={product.id}>
                                <BgCard key={product.id} onClick={() => handleOpenProduct(product.id)}>
                                    <ProductInformations>
                                        <h3>{product.name}</h3>
                                        <p>{product.description}</p>
                                        <h4>{product.extras}</h4>
                                        <h5><MdAttachMoney size={20} /> {product.price}</h5>
                                    </ProductInformations>

                                    <ProductImage>
                                        <img src={product.picture} alt="Imagem Bebida" />
                                    </ProductImage>
                                </BgCard>
                            </div>
                        ))}
                    </BgCards>
                </BgEndPoint>

            </Content>

            <MenuMobile />

            <Footer />

        </Container>
    )
}