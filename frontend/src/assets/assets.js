import logo from './logo.jpg'
import product_1 from './product_1.png'
import product_2 from './product_2.png'
import aboutus from './aboutus.jpg'

export const assets = {
    logo,
    facebook_icon,
    linkedIn_icon,
    twitter_Icon,
    aboutus

}

export const menu_list = [
   {
  id: 1,
  product_name: "ES3035E+ Digital Insulation Resistance Meter",
  product_image: product_1,   // main image for explore page

  // Multiple images for brochure layout
  images: [
    product_1,
    // you can add more images here later
    // product_1_side,
    // product_1_accessories
  ],

  // I. Characteristic
  characteristics: `
ES3035E+ digital insulation resistance tester, also known as megohmmeter, high-voltage insulation resistance
meter, is used for insulation resistance testing. The instrument has large-screen LCD gray and white backlight display,
data storage, data access, alarm, automatic discharge, charging, automatic shutdown and other functions. At the same
time, it also has the function of measuring the absorption ratio of DC voltage and AC voltage and polarization index. The
whole machine is beautiful and high-grade, with a wide range, high resolution, convenient operation, convenient
carrying, accurate, reliable, stable performance, large output power, and strong anti-interference ability.
ES3035E+ has a shock-proof, dust-proof and moisture-proof structure, and is suitable for harsh working
environments. It is a common and indispensable instrument for telecommunications, electricity, meteorology,
computer rooms, oil fields, electromechanical installation and maintenance, and industrial enterprises that use
electricity as industrial power or energy. . It is suitable for measuring the insulation resistance value of various insulating
materials and transformers, motors, cables and electrical equipment.
ES3035E+ digital insulation resistance meter is composed of medium and large scale integrated circuits. This watch
has large output power and many output voltage levels (there are 6 voltage levels). The rated insulation test voltage
range is 250V~10kV, and the insulation resistance measurement range is 0.01MΩ~2000GΩ. The DC voltage
measurement range is 0~1000V, and the AC voltage measurement range is 0~750V.
  `,

  // II. Technical Specification
  technicalSpecifications: [
    { name: "Features", value: "Insulation resistance test, voltage test" },
    { name: "Baseline conditions", value: "23℃±5℃, below 75%rh" },
    { name: "Rated voltage (V)", value: "250; 500; 1000; 2500; 5000V; 10KV" },
    { name: "Measuring voltage (V)", value: "Rated voltage x (1±10%)" },
    { name: "Insulation resistance range (GΩ)", value: "0.01MΩ ~ 2000GΩ Accuracy ±3%rdg±5dgt" },
    { name: "Insulation Resistance Resolution", value: "0.01MΩ" },
    { name: "DC voltage range", value: "0 ~ 1000V" },
    { name: "DC voltage resolution", value: "0.1V" },
    { name: "AC voltage range", value: "0 ~ 750V" },
    { name: "AC Voltage Resolution", value: "0.1V" },
    { name: "AC Voltage Resolution", value: "0.1V" },
    { name: "Output short circuit current", value: "≥5mA(10KV)" },
    { name: "Absorption Ratio and Polarization Index Measurements", value: "Have" },
    { name: "Power supply", value: "12V rechargeable battery" },
    { name: "Backlight", value: "Controllable gray and white screen backlight, suitable for use in dark places" },
    { name: "Display mode", value: "4-digit large LCD display, gray and white screen backlight" },
    { name: "LCD display size", value: "108mm x 65mm" },
    { name: "Meter size", value: "0Length, width and height: 277.2mmx227.5mmx153mm" },
    { name: "USB interface", value: "With USB interface, software monitoring, storage data can be uploaded to the computer, save and print" },
    { name: "Communication line", value: "1 USB communication line" },
    { name: "Test line", value: "High voltage bar red 3 meters, high voltage test line black 1.5 meters, green line 1.5 meters" },
    { name: "Data storage", value: "500 groups, flashing 'FULL' symbol indicates that the storage is full" },
    { name: "Data access", value: "Data access function: 'READ' symbol display" },
    { name: "Overflow display", value: "Overrange overflow function: 'OL' symbol display" },
    { name: "Alarm function", value: "When the measured value exceeds the alarm setting value, an alarm prompt will be issued" },
    { name: "Power consumption", value: "Standby: 30mA Max (backlight off)/Turn on the backlight: 42mA Max/Measurement: 200mA Max (backlight off)" },
    { name: "Instrument quality", value: "2720g (including battery)" },
    { name: "Battery voltage", value: "Low battery voltage, showing low battery symbol" },
    { name: "Automatic shut-down", value: "The meter shuts down after about 15 minutes of inactivity" },
    { name: "Insulation resistance", value: "≥50MΩ (between measurement line and shell)" },
    { name: "Pressure resistance", value: "3kV/50Hz 1min" },
    { name: "Operating temperature and humidity", value: "-10℃ ~ +50℃ < 85%RH" },
    {name: "Storage temperature and humidity", value: "-15℃ ~ +55℃ < 90%RH" },
    {name: "Suitable for safety regulations", value: "IEC61010-1, IEC1010-2-31, IEC61557-1, 5, IEC60529 (IP54), pollution, etc. 2, CAT Ⅲ 300V" },
     
  ],

  // III. Packing List
  packingList: [
    { name: "Instrument", value: "1 set" },
    { name: "High Pressure Rod", value: "1 red" },
    { name: "High Voltage Test Lead", value: "2 (black, 1 green)" },
    { name: "Monitoring software CD", value: "1 pc" },
    { name: "USB Communication Cable", value: "1" },
    { name: "Charger", value: "1" },
    { name: "Manual & Warranty", value: "1 set" },
    { name: "Instrument box", value: "1" },
  ]
}
,
{
  id: 2,
  product_name: "FR207 Series Clamp Digital Multimeter",
  product_image: product_2,

  features: [
    "DC / AC Current: 1000A",
    "AC Voltage: 1000V",
    "DC Voltage: 1700V (FR207C 1000V)",
    "LowZ 100V ~ 1000V",
    "60MΩ Resistance Measuring Capability",
    "60mF Capacitance Measuring Capability",
    "10MHz / 20MHz Frequency Measuring Capability",
    "Temperature measure: 1000°C / 1832°F",
    "NCV / LIVE, Red LED Flash & Continuity Buzzer",
    "Clamp Jaw opening 42mm"
  ],

  application: "Electrician power distribution technology installation and maintenance. Industrial construction, factory production and distribution system installation, maintenance and repair.",

  specifications: [
    { name: "AC Current (A)", value1: "60 / 600 / 1000A", value2: "60 / 600 / 1000A", accuracy: "±(2%+5)" },
    { name: "INRUSH Current (A)", value1: "60 / 600 / 1000A", value2: "60 / 600 / 1000A", accuracy: "±(2%+5)" },
    { name: "DC Current (A)", value1: "60 / 600 / 1000A", value2: "60 / 600 / 1000A", accuracy: "±(2%+5)" },
    { name: "DC High Voltage (V)", value1: "1000V",  value2: "1700V",accuracy: "±(0.5%+5)" },
    { name: "AC High Voltage (V)", value1: "1000V",  value2: "1000V",accuracy: "±(0.5%+5)" },
    { name: "LoWZ AC/DC Voltage (V)", value1: "100 ~ 1000V",  value2: "100 ~ 1000V",accuracy: "±(1.5%+5)" },
    { name: "ACV/Bandwidth (Hz)", value1: "1kHz", value2: "1kHz",accuracy: "-" },
    { name: "ACA/Bandwidth (Hz)", value1: "60Hz", value2: "60Hz",accuracy: "-" },
    { name: "Frequency (Hz)", value1: "10MHz", value2: "20MHz",accuracy: "±(0.5%+5)" },
    { name: "Resistance (Ω)", value1: "600Ω/6kΩ/60kΩ/600kΩ/6MΩ/60MΩ", value2: "600Ω/6kΩ/60kΩ/600kΩ/6MΩ/60MΩ",accuracy: "±(1%+5)/±(2%+5)" },
    { name: "Capacitance (F)", value1: "60nF ~ 600nF ~ 600uF ~ 6000nF/60000uF", value2: "60nF ~ 600nF ~ 600uF ~ 6000nF/60000uF",accuracy: "±(4%+5)/±(8%+5)" },
    { name: "Temperature(°C))", value1: "-", value2: "1000°C",accuracy: "±(1.5%+4)" },
    { name: "Temperature(°F))", value1: "-", value2: "1832°F",accuracy: "±(2%+5)" },
  ],
  featuresTable: [
  { name: "Display Counts", value: "6000" },
  { name: "Auto Range", value: true },
  { name: "True RMS", value: true },
  { name: "ACA PEAK", value: true },
  { name: "ACV VFD", value: true },
  { name: "Continuity / Diode", value: true },
  { name: "NCV (Red LED Flashing)", value: true },
  { name: "AC Live", value: true },
  { name: "Max / Min", value: true },
  { name: "Zero / Rel", value: true }
]

}

]