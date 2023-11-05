// src/co2SensorsData.js

const co2SensorsData = [
    {
      id: 1,
      image:"https://instrumentationtools.com/wp-content/uploads/2015/08/CO2-Analyzer-Working-Principle.gif",
      name: "Nondispersive infrared (NDIR) CO2 sensor",
      description: "NDIR sensors are spectroscopic sensors to detect CO2 in a gaseous environment by its characteristic absorption. The key components are an infrared source, a light tube, an interference (wavelength) filter, and an infrared detector. The gas is pumped or diffuses into the light tube, and the electronics measure the absorption of the characteristic wavelength of light. NDIR sensors are most often used for measuring carbon dioxide.[2] The best of these have sensitivities of 20–50 PPM.[2] Typical NDIR sensors cost in the (US) $100 to $1000 range.NDIR CO2 sensors are also used for dissolved CO2 for applications such as beverage carbonation, pharmaceutical fermentation and CO2 sequestration applications. In this case they are mated to an ATR (attenuated total reflection) optic and measure the gas in situ. New developments include using microelectromechanical systems (MEMS) IR sources to bring down the costs of this sensor and to create smaller devices (for example for use in air conditioning applications)",
    },
    {
      id: 2,
      image:"https://optics.org/objects/news/thumb/10/3/30/RedfinchM.jpg",
      name: "Photoacoustic sensors",
      description: "CO2 can be measured using photoacoustic spectroscopy. Concentration of CO2 can be measured by subjecting a sample to pulses of electromagnetic energy (such as from a distributed feedback laser[4]) that is tuned specifically to the absorption wavelength of CO2. With each pulse of energy, the CO2 molecules within the sample will absorb and generate pressure waves via the photoacoustic effect. These pressure waves are then detected with an acoustic detector and converted to a usable CO2 reading through a computer or microprocessor.[5]",
    },
    {
      id: 3,
      image:"https://www.akm.com/content/www/akm/eu/en/products/co2-sensor/tutorial/types-mechanism/_jcr_content/root/responsivegrid/layoutcontainer_9010_1573113024/akm_core_image_29397.coreimg.jpeg/1667180285974/r600-2-1-5-chemical.jpeg",
      name: "Chemical CO2 sensors",
      description: "Chemical CO2 gas sensors with sensitive layers based on polymer- or heteropolysiloxane have the principal advantage of very low energy consumption, and that they can be reduced in size to fit into microelectronic-based systems. On the downside, short and long term drift effects, as well as a rather low overall lifetime, are major obstacles when compared with the NDIR measurement principle.[6] Most CO2 sensors are fully calibrated prior to shipping from the factory. Over time, the zero point of the sensor needs to be calibrated to maintain the long term stability of the sensor.",
    },
    {
      id: 4,
      image:"https://onlinelibrary.wiley.com/cms/asset/4f41c44e-282d-484d-9699-95edc6489713/bit27253-gra-0001-m.jpg?trick=1696575885000",
      name: "Estimated CO2 sensor",
      description: "For indoor environments such as offices or gyms where the principal source of CO2 is human respiration, rescaling some easier-to-measure quantities such as volatile organic compound (VOC) and hydrogen gas (H2) concentrations provides a good-enough estimator of the real CO2 concentration for ventilation and occupancy purposes.[citation needed] Furthermore, inasmuch as ventilation is a factor in the spread of respiratory viruses,[8] CO2 levels are a rough metric for COVID-19 risk; the worse the ventilation, the better for viruses and vice versa.[9][10] Sensors for these substances can be made using cheap (~$20) Microelectromechanical systems (MEMS) metal oxide semiconductor (MOS) technology. The reading they generate is called estimated CO2 (eCO2)[11] or CO2 equivalent (CO2eq).[12] Although the readings tend to be good enough in the long run, introducing non-respiration sources of VOC or CO2, such as peeling fruits or using perfume, will undermine their reliability. H2-based sensors are less susceptible as they are more specific to human breathing, although the very health conditions the hydrogen breath test is set to diagnose will also disrupt them",
    },
  ];
  
  export default co2SensorsData;
  