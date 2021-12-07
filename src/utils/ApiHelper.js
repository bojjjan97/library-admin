
const CheckInRent = async (rentId) => {
        try{
            await fetch(process.env.REACT_APP_API_URL + "/Rent/" + rentId + "/checkin",
                {
                    method: "POST"
                }
            )
        }catch(e){
            alert("Error while checking rent in!")
        }
}

export { CheckInRent }