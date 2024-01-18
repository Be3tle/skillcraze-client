import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

const DetailsCard = ({ course }) => {
  const {
    instructor,
    title,
    img,
    description,
    enrollment_status,
    duration,
    schedule,
    location,
    prerequisites,
    week,
    topic,
    content,
    syllabus,
  } = course || {};

  return (
    <section className="bg-base-800 text-gray-700">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:pt-12 lg:pt-28 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col pt-0 justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg text-left">
          <h1 className="text-5xl font-bold pb-12 sm:text-6xl">{title}</h1>

          <p className="text-xl py-2 font-semibold">Instructor: {instructor}</p>
          <p className="text-xl py-2 font-semibold">
            Enrollment: {enrollment_status}
          </p>
        </div>
      </div>

      <div className="container pb-20 ml-12 lg:ml-32 w-9/12 lg:w-11/12">
        <p className="text-lg lg:text-xl sm:text-center md:text-start text-justify pb-6">
          {description}
        </p>
        <p className="text-lg font-semibold sm:text-center md:text-start text-justify py-2">
          Duration: {duration}
        </p>
        <p className="text-lg font-semibold sm:text-center md:text-start text-justify py-2">
          Schedule: {schedule}
        </p>
        <p className="text-lg font-semibold sm:text-center md:text-start text-justify py-2">
          Location: {location}
        </p>
        <p className="text-lg font-semibold sm:text-center md:text-start text-justify py-2">
          Prerequisites: {prerequisites}
        </p>

        {/* ------------------ */}
        <h1 className='text-lg font-semibold'>Syllabus</h1>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                 Week {syllabus[0].week}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
export default DetailsCard;
