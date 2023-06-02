import React, { useState } from 'react'
import { Typography, Select, MenuItem, TextField, Button, IconButton, FormGroup, FormControlLabel, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions, Box, BoxProps } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";



const BookTicket = (openViewModal, handleCloseViewModal, showname, summary) => {
    const [showTitle, setShowTitle] = useState(name)
    const [name, setName] = useState('')
    const [seats, setSeats] = useState('')
    const [openBookTicketViewModal, setOpenBookTicketViewModal] = useState < Boolean > (false);
    const handleCloseModal = () => setOpenBookTicketViewModal(false);
    const handleBookTicket = () => {

    }
    return (
        <>

            <Dialog open={openViewModal}
                onClose={handleCloseViewModal}
                showname={showname}>
                <DialogTitle
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography textAlign="left" fontFamily={"Lora"} fontWeight={700} fontSize={28} id="modal-modal-title" variant="h6" component="h2">
                        Book Show
                    </Typography>

                    <IconButton onClick={handleCloseViewModal}>
                        <CloseIcon />
                    </IconButton>

                </DialogTitle>
                <DialogContent>
                    <Typography fontSize={16} fontWeight={500} textAlign="left" color="#212121">
                        Show Title
                    </Typography>

                    <TextField

                        margin="normal"
                        id="text"
                        name="showtitle"
                        autoComplete="showtitle"
                        autoFocus
                        value={showTitle}
                        onChange={(e) => setShowTitle(e.target.value)}
                        sx={{ width: '551px', background: '#fffff', }}
                        disabled
                    />


                    <Typography fontSize={16} fontWeight={500} textAlign="left" color="#212121">
                        Name
                    </Typography>

                    <TextField

                        margin="normal"
                        id="text"
                        placeholder="Enter Your Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={showTitle}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ width: '551px', background: '#fffff', }}

                    />

                    <Typography fontSize={16} fontWeight={500} textAlign="left" color="#212121">
                        No of Seats
                    </Typography>

                    <TextField

                        margin="normal"
                        id="text"
                        placeholder="Enter no of seats"
                        name="seats"
                        autoComplete="seats"
                        autoFocus
                        value={showTitle}
                        onChange={(e) => setSeats(e.target.value)}
                        sx={{ width: '551px', background: '#fffff', }}

                    />




                    <DialogActions style={{ justifyContent: "flex-start" }}>
                        <Button sx={{

                            '&:hover': {
                                backgroundColor: '#7852FB',
                            },


                            textAlign: "left",
                            backgroundColor: '#51abcb', color: " #FAF8F5",
                            textTransform: "capitalize", borderRadius: "8px", fontSize: "16px",
                            width: "192px", height: "51px"
                        }}
                            onClick={handleBookTicket}
                        // onClick={openViewModal}
                        >Save</Button>


                        <Button sx={{
                            textAlign: "left", left: "42px", fontWeight: 500, fontSize: "18px",
                            backgroundColor: '#FFFFFF', color: " #111928",
                            textTransform: "capitalize", borderRadius: "8px",
                            height: "51px",
                        }}
                            onClick={handleCloseViewModal}
                        >Cancel</Button>
                    </DialogActions>

                </DialogContent>


            </Dialog>


        </>
    )
}

export default BookTicket