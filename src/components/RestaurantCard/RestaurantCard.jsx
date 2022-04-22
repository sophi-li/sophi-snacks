import React from "react";
import stylesheet from "./RestaurantCard.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function RestaurantCard({ restaurant }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };

  return (
    <div className={stylesheet.container}>
      <div>
        <p className={stylesheet.neighborhood}>{restaurant.neighborhood}</p>
        <p className={stylesheet.name}>{restaurant.name}</p>
        {restaurant.items.map((i) => {
          return (
            <p className={stylesheet.item}>
              {i.item} {i.isVeg ? "🌱" : null} {i.isVegan ? "ⓥ" : null} 
            </p>
          );
        })}
      </div>
      <div>
        <button className={stylesheet.btn} onClick={handleOpen}>
          Details
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {restaurant.contact.map((c) => {
              return (
                <>
                  <h2 className={stylesheet.contactTitle}>{restaurant.name}</h2>
                  <div className={stylesheet.contactContainer}>
                    {c.phone && (
                      <a
                        className={stylesheet.contactDetails}
                        href="tel:8665562570"
                      >
                        Call {c.phone}
                      </a>
                    )}
                    {c.website && (
                      <a
                        className={stylesheet.contactDetails}
                        href={c.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    )}
                    {c.order && (
                      <a
                        className={stylesheet.contactDetails}
                        href={c.order}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order Online
                      </a>
                    )}
                    {c.directions && (
                      <a
                        className={stylesheet.contactDetails}
                        href={c.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Directions
                      </a>
                    )}
                  </div>
                </>
              );
            })}
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default RestaurantCard;
