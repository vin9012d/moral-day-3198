import { Box, Img ,Flex} from "@chakra-ui/react";
import women from "../Medias/women.jpg"
import men from "../Medias/men.jpg"
import kids from "../Medias/kids.jpg"
import shoesbag from "../Medias/shoesbag.jpg"
import "./Category.css"
import CategoryButton from "./CategoryButton";

export default function Category() {
    return (
        <Box>
            <Flex className="homeCategory" flexWrap="wrap">
                <Box w="25%" sx={{position:"relative"}}>
                    <Img w="100%" src={women} alt={women} />
                    <CategoryButton> Women</CategoryButton>
                </Box>
                <Box w="25%" sx={{position:"relative"}}>
                <Img w="100%" src={men} alt={men} />
                    <CategoryButton> Men</CategoryButton>
                    </Box>
                    <Box w="25%" sx={{position:"relative"}}>
                <Img w="100%" src={kids} alt={kids} />
                        <CategoryButton> Kids</CategoryButton>
                        </Box>
                        <Box w="25%" sx={{position:"relative"}}>
                <Img w="100%" src={shoesbag} alt={shoesbag} />
                            <CategoryButton> Shoes & bag</CategoryButton>
                            </Box>
                </Flex>
        </Box>
    )
}