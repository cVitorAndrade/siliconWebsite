import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdKeyboardArrowDown } from "react-icons/md"
import { IconButton } from '../IconButton';

import webDevelopment from "../../assets/ourCompetencies/webDevelopment.png";
import strategy from "../../assets/ourCompetencies/strategy.jpg";
import applicationDevelopment from "../../assets/ourCompetencies/applicationDevelopment.jpg";
;
import digitalMarketing from "../../assets/ourCompetencies/digitalMarketing.jpg";
import digitalAdversiting from "../../assets/ourCompetencies/digitalAdvertising.jpg";


export default function BasicAccordion() {
  return (
    <div className='accordion-wrapper'>
      <Accordion>
        <AccordionSummary
          expandIcon={<IconButton icon={<MdKeyboardArrowDown size={20} />} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Digital Marketing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src={digitalMarketing} />
          Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IconButton icon={<MdKeyboardArrowDown size={20} />} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Web Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src={webDevelopment} />
          Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IconButton icon={<MdKeyboardArrowDown size={20} />} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Application Development</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src={applicationDevelopment} />
          Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IconButton icon={<MdKeyboardArrowDown size={20} />} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Strategy</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src={strategy} />
          Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<IconButton icon={<MdKeyboardArrowDown size={20} />} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Digital Advertising</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <img src={digitalAdversiting} />
          Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}