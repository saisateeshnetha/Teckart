const Url = "http://13.48.248.120:3001/"

export const URLS = {
  Base: Url,

  //Dashboard
  GetDashboard: Url + "v1/gbsapi/admin/getdashboard",

  //profile
  getProfile: Url + "v1/gbsapi/admin/auth/getadminprofile",
  UpdateProfile: Url + "v1/gbsapi/admin/auth/editprofile",
  UpdateImage: Url + "v1/gbsapi/admin/auth/updateprofilepic",
  ChangePass: Url + "v1/gbsapi/admin/auth/changeadminpass",

  //HomeSliders
  AddHomeslides: Url + "v1/gbsapi/admin/slider/addslider",
  GetHomeslides: Url + "v1/gbsapi/admin/slider/getallsliders",
  GetHomeslidesSearch:
    Url + "v1/gbsapi/admin/slider/getallsliders?searchQuery=",
  UpdateHomeslides: Url + "v1/gbsapi/admin/slider/editslider/",
  DeleteHomeslides: Url + "v1/gbsapi/admin/slider/deleteslider/",

  //HomeAbout
  AddHomeAbout: Url + "v1/gbsapi/admin/homecontent/addhomecontent",
  GetHomeAbout: Url + "v1/gbsapi/admin/homecontent/getallhomecontents",
  GetHomeAboutSearch:
    Url + "v1/gbsapi/admin/homecontent/getallhomecontents?searchQuery=",
  UpdateHomeAbout: Url + "v1/gbsapi/admin/homecontent/edithoecontent/",
  DeleteHomeAbout: Url + "v1/gbsapi/admin/homecontent/deletehomecontent/",

  //PROFESSIONALS
  AddPROFESSIONALS: Url + "v1/gbsapi/admin/faculty/addfaculty",
  GetPROFESSIONALS: Url + "v1/gbsapi/admin/faculty/getallfaculties",
  GetPROFESSIONALSSearch:
    Url + "v1/gbsapi/admin/faculty/getallfaculties?searchQuery=",
  UpdatePROFESSIONALS: Url + "v1/gbsapi/admin/faculty/editfaculty/",
  DeletePROFESSIONALS: Url + "v1/gbsapi/admin/faculty/deletefaculty/",

  //About
  GetAbout1: Url + "v1/gbsapi/admin/aboutus/getaboutus",
  UpdatAbout1: Url + "v1/gbsapi/admin/aboutus/editaboutus",

  //ContactUs
  GetContactUs: Url + "v1/gbsapi/admin/contactus/getcontactus",
  UpdatContactUs: Url + "v1/gbsapi/admin/contactus/editcontactus",

  //Settings
  GetSetting: Url + "v1/gbsapi/admin/seting/getsetting",
  UpdatePRIVACYPOLICY: Url + "v1/gbsapi/admin/seting/editprivacypolicy",
  UpdateTERMSANDCONDITION: Url + "v1/gbsapi/admin/seting/edittermsandcondition",
  UpdateRefundPolicy: Url + "v1/gbsapi/admin/seting/editrefundpolicy",

  //Faqs
  AddFaqs: Url + "v1/gbsapi/admin/faq/addfaq",
  GetFaqs: Url + "v1/gbsapi/admin/faq/getallfaqs",
  GetFaqsSearch: Url + "v1/gbsapi/admin/faq/getallfaqs?searchQuery=",
  UpdateFaqs: Url + "v1/gbsapi/admin/faq/editfaq",
  InActiveFaqs: Url + "v1/gbsapi/admin/faq/deletefaq",

  //Product Category
  AddProductCategory:
    Url + "v1/gbsapi/admin/productcategory/addproductcategory",
  GetProductCategory:
    Url + "v1/gbsapi/admin/productcategory/getallproductcategorys",
  GetProductCategorySearch:
    Url + "v1/gbsapi/admin/productcategory/getallproductcategorys?searchQuery=",
  UpdateProductCategory:
    Url + "v1/gbsapi/admin/productcategory/editproductcategory/",
  DeleteProductCategory:
    Url + "v1/gbsapi/admin/productcategory/deleteproductcategory/",

  //AddProduct
  AddProduct: Url + "v1/gbsapi/admin/product/addproduct",
  GetProduct: Url + "v1/gbsapi/admin/product/getallproduct",
  GetProductSearch: Url + "v1/gbsapi/admin/product/getallproduct?searchQuery=",
  UpdateProduct: Url + "v1/gbsapi/admin/product/editproduct/",
  DeleteProduct: Url + "v1/gbsapi/admin/product/deleteproduct/",
  GetoneProduct: Url + "v1/gbsapi/admin/product/getproductbyid",

  //Testimonials
  AddTestimonials: Url + "v1/gbsapi/admin/testimonial/addtestimonial",
  GetTestimonials: Url + "v1/gbsapi/admin/testimonial/getalltestimonials",
  GetTestimonialsSearch:
    Url + "v1/gbsapi/admin/testimonial/getalltestimonials?searchQuery=",
  UpdateTestimonials: Url + "v1/gbsapi/admin/testimonial/edittestimonial/",
  DeleteTestimonials: Url + "v1/gbsapi/admin/testimonial/deletetestimonial/",

  //Clients
  AddClients: Url + "v1/gbsapi/admin/client/addclient",
  GetClients: Url + "v1/gbsapi/admin/client/getallclients",
  GetClientsSearch: Url + "v1/gbsapi/admin/client/getallclients?searchQuery=",
  UpdateClients: Url + "v1/gbsapi/admin/client/editclient/",
  DeleteClients: Url + "v1/gbsapi/admin/client/deleteclient/",
}
