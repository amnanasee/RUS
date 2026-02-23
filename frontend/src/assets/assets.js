import logo from './logo.jpg'
import product_1 from './product_1.png'
import product_2 from './product_2.png'
import aboutus from './aboutus.jpg'
import es3035e_pdf from './pdf/ES3035E+ Brief Introduction.pdf'
import fr207_pdf from './pdf/FR207+ Brief Introduction.pdf'

export const assets = {
    logo,
    aboutus,
    es3035e_pdf,
    fr207_pdf
}

export const menu_list = [
{
  id: 1,
  product_name: "ES3035E+ Digital Insulation Resistance Meter",
  product_image: product_1,

  shortPoints: [
    "Insulation resistance testing up to 10kV",
    "Large LCD with backlight",
    "Data storage & USB upload",
    "Automatic discharge & shutdown"
  ],

  brochurePdf: es3035e_pdf
}
,
{
  id: 2,
  product_name: "FR207 Series Clamp Digital Multimeter",
  product_image: product_2,

  shortPoints: [
    "AC/DC current up to 1000A",
    "True RMS measurement",
    "Temperature measurement",
    "NCV detection"
  ],

  brochurePdf: fr207_pdf
}

]