import { useTheme } from "@mui/material"
import { Box, Typography } from "@mui/material"
import { shades } from "../../theme"

const Footer = () => {
    const { palette: { neutral } } = useTheme()

    return (
        <Box
            mt="70px"
            p="40px 0"
            backgroundColor={neutral.liht}
        >
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box
                    width="clamp(20%, 30%, 40%)"
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        ECOMMER
                    </Typography>

                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius alias exercitationem reprehenderit voluptates omnis quisquam cupiditate inventore ab! Soluta doloribus ducimus accusamus quibusdam delectus harum fugiat ipsam inventore nihil est!
                    </div>
                </Box>
                <Box>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                    >
                        About Us
                    </Typography>
                    <Typography mb="30px" sx={{
                        cursor: "pointer"
                    }}>
                        Careers
                    </Typography>
                    <Typography sx={{
                        cursor: "pointer"
                    }} mb="30px">
                        Our Stores
                    </Typography>
                    <Typography sx={{
                        cursor: "pointer"
                    }} mb="30px">
                        Terms & Conditions
                    </Typography>
                    <Typography mb="30px">
                        Privacy Policy
                    </Typography>
                </Box>

                <Box>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                    >
                        Customer Care
                    </Typography>
                    <Typography mb="30px">
                        Help Center
                    </Typography>
                    <Typography mb="30px">
                        Track Tour Order
                    </Typography>
                    <Typography mb="30px">
                        Corporate & Bulk Purchasing
                    </Typography>
                    <Typography mb="30px">
                        Returns & Refunds
                    </Typography>
                </Box>
                <Box
                    width="clamp(20%, 25%, 30%)"
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                    >
                        Customer Care
                    </Typography>
                    <Typography mb="30px">
                        Rua Professor Eurico Rabelo – Maracanã, Rio de Janeiro – RJ
                    </Typography>
                    <Typography mb="30px">
                        Email: somethingsomething@gmail.com
                    </Typography>
                    <Typography mb="30px">
                        (22) 33333-566546546
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;