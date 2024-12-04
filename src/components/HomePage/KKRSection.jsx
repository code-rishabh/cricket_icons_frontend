import React from 'react'
import TeamSection from '../TeamSection/TeamSection'
import KKRImg from "/KKRImg.png"

const KKRSection = () => {
  return (
    <TeamSection 
    teamImg={KKRImg}
    teamTagLine={"KOLKATA KNIGHT RIDERS - KORBO, LORBO, JEETBO RE"}
    teamDesc={"KKR, HAI TAYYAR...."}
    linkToTeamPage={""}
    customStyles={"right-0"}
    teamDescStyles={"text-alpha "}
    />
  )
}

export default KKRSection