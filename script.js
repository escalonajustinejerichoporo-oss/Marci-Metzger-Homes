html {
    scroll-behavior: smooth;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f3eeee;
}

/*HEADER*/
.header {
    width: 100%;
    background-color: rgb(255, 255, 255);  
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.marci h1 {
    font-size: 24px;
    color: rgb(5, 5, 5);  
    font-weight: 700;
    padding-left: 20px;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
}

.nav {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.nav a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 18px;
    transition: 0.2s;
}

.nav a:hover {
    color: red;
    transition: 0.2s;
}

/* HOME */
.b_image {
    height: 600px; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;     
    background-image: url("./images/photo-1464822759023-fed622ff2c3b.avif");
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 0 50px; 
}

.nameM {
    margin-top: 370px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0px;
    font: bolder;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

.companyN {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
    font: bolder;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}

.call-btn {
    background-color: #000000;
    padding: 12px 25px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    font-size: 20px;
    transition: 0.2s;
    font-weight: 600;
    border-radius: 20px;
}

.call-btn:hover {
    background-color: #ffffff;
    color: #030303;
}

/* About */
.about1 {
    padding-top: 30px;
    position: relative;
}

.sold h1 {
    text-align: center;
    font-size: 36px;
    margin-top: 70px;
    margin-bottom: 60px;
    font-weight: 900;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.block {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
    padding-bottom: 80px;
}

.text-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 650px;
    text-align: center; 
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}

.text-block h1 {
    font-size: 28px;
    margin-bottom: 15px;
    text-align: justify;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
}


.text-block p {
    font-size: 18px;
    line-height: 1.6;
    text-align: left;
}

.block img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
}

/* Images */
.photoG {
    width: 100%;
    padding: 50px 0;
    background: #111;
    color: #fff;
    display: flex;
    justify-content: center;
}

.gallery-wrapper {
    width: 90%;
    max-width: 1300px;
    text-align: center;
}

.gallery-title {
    font-size: 40px;
    margin-bottom: 30px;
    font-family: "Times New Roman", serif;
}

/* Main image container */
.gallery-main {
    position: relative;
    width: 100%;
    max-width: 1300px;
    height: auto; 
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.center-img {
    width: 60%;
    max-width: 100%;
    height: auto; 
    object-fit: cover;
    z-index: 3;
    transition: all 0.7s ease-in-out; 
}

.side-img {
    position: absolute;
    width: 50%;
    max-width: 100%;
    height: auto; 
    object-fit: cover;
    filter: blur(6px) brightness(0.5);
    z-index: 1;
    transition: all 0.7s ease-in-out;
}

.left-blur {
    left: 0;
    transform: translateX(-25%);
}

.right-blur {
    right: 0;
    transform: translateX(25%);
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    border: none;
    padding: 14px 20px;
    cursor: pointer;
    font-size: 28px;
    color: white;
    z-index: 5;
}

.left-arrow {
    left: 20px;
}

.right-arrow {
    right: 20px;
}

.thumb-row {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.thumb-row img {
    width: 130px;
    height: 80px;
    object-fit: cover;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
}

.thumb-row img:hover {
    opacity: 1;
    transform: scale(1.5);
    border: thick #ffffff solid; 
}

@media(max-width: 1024px) {
    .center-img {
        width: 70%;
    }
    .side-img {
        width: 40%;
    }
}

@media(max-width: 768px) {
    .center-img {
        width: 80%;
    }
    .side-img {
        display: none; 
    }
    .thumb-row img {
        width: 80px;
        height: 50px;
    }
}

/* Services */
.os1 {
    font-weight: 900;
    text-align: center; 
    font-size: 24px;
    padding-top: 70px;
    padding-bottom: 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.services1 {
    position: relative; 
    padding-bottom: 200px; 
}
.services-row {
    display: flex;
    justify-content: center;
    gap: 200px;              
    flex-wrap: wrap;
    padding-top: 30px;          
}

.service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
    max-width: 300px;       
}

.service-item img {
    width: 150%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 40px;
}

.service-item h3 {
    font-size: 24px;
    margin-bottom: 5px;
    font-weight: 700;
    padding-bottom: 10px;
}

.service-item p {
    font-size: 17px;
    line-height: 1.8;
}

.line-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;      
    height: 3px;       
    background-color: black;
    bottom: 30px;
}

.line-left {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3px;        
    height: 100%;     
    background-color: black;
    left: 30px;
}

/* Find us */
.find1 {
    position: relative;
    width: 100%;
    min-height: 80vh; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background: url('./images/mtn falls pond.webp') no-repeat center center;
    background-size: cover; 
    padding-bottom: 250px;
}

.find1 h1 {
    font-size: 48px;
    color: #fff;
    text-align: center;
    z-index: 2;
    font-family: 'Arial', sans-serif;
    padding-top: 210px;
}

.glass-box {
    background: rgba(173, 216, 230, 0.15); 
    border-radius: 25px;
    padding: 50px 50px;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 90%;
    max-width: 1100px;
    box-sizing: border-box;
    color: #eee;
    font-family: 'Arial', sans-serif;
}

.form-row {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 40px;
}

.form-row.top-row .form-group {
    min-width: 350px;
    flex: 1;
}

.form-group {
    display: flex;
    flex-direction: column;
    min-width: 200px;
}

.form-group label {
    color: #eee; 
    font-weight: 600;
    margin-bottom: 0px;
}

.form-group select,
.form-group input {
    padding: 12px;
    border-radius: 12px;
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
    font-family: 'Arial', sans-serif; 
    color: #ccc; 
    background: rgb(255, 255, 255); 
}

.form-group input::placeholder {
    color: #aaa; 
    opacity: 1; 
}

.submit-group {
    display: flex;
    justify-content: center;       
    width: 100px;
    margin-top: 10px;
}

.submit-group button {
    padding: 14px 28px;
    border-radius: 12px;
    border: none;
    background-color: #000;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    font-family: 'Arial', sans-serif; 
}

.submit-group button:hover {
    background-color: #fff;
    color: #000;
}


@media (max-width: 1024px) {
    .find1 {
        min-height: 100vh; 
        padding-bottom: 200px;
    }

    .glass-box {
        width: 80%;
        padding: 40px 40px;
        gap: 25px;
    }

    .find1 h1 {
        font-size: 36px;
        padding-top: 180px;
    }
}

@media (max-width: 768px) {
    .find1 {
        min-height: 120vh; 
        padding-bottom: 150px;
    }

    .glass-box {
        width: 95%;
        padding: 30px 20px;
        gap: 20px;
    }

    .find1 h1 {
        font-size: 28px;
        padding-top: 150px;
    }

    .form-row {
        flex-direction: column;
        gap: 15px;
    }

    .submit-group {
        width: 100%;
    }

    .submit-group button {
        width: 100%;
    }
}


/* Contacts */
.contacts1 {
    background-color: #000;
    padding: 50px;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
}

.contact-container {
    display: flex;
    gap: 50px;
    align-items: flex-start;
    flex-wrap: wrap;
}

.office-image {
    flex: 0 0 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.office-circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
    margin-bottom: 15px;
}

.office-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.0rem;
    font-weight: 700;
    color: #FFD700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 5px;
}

.office-phone {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 10px;
}

.social-icons-left {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.social-icons-left img {
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: transform 0.3s;
}

.social-icons-left a:hover img {
    transform: scale(1.2);
}

.contact-form {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.contact-form h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #FFD700;
    margin-bottom: 20px;
}

.contact-form .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 15px;
}

.contact-form .form-group {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.contact-form input,
.contact-form textarea,
.contact-form select {
    width: 100%;
    padding: 12px;
    border-radius: 6px;
    border: none;
    background-color: #111;
    color: #fff;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
    color: #ccc;
}

.contact-form button {
    padding: 14px;
    background-color: #25D366;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
}

.contact-form button:hover {
    background-color: #1DA851;
}

.contact-info-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact-info-right h1.contact-name {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: #FFD700;
    line-height: 1.3;
    margin-bottom: 15px;
}

.contact-info-right h4 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #FFD700;
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.contact-info-right p {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    line-height: 1.5;
    font-size: 1rem;
}

.whatsapp-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background-color: #555;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
    font-weight: bold;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    width: auto;
    margin-bottom: 15px;
    transition: background 0.3s;
    height: 40px;
}

.whatsapp-btn:hover {
    background-color: #777;
}

.whatsapp-logo {
    width: 20px;
    height: 20px;
}

#day-select {
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #111;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    width: auto;
    display: inline-block;
    margin-bottom: 15px;
}

#day-select:hover {
    background-color: #222;
}

/* Location */
.location1 {
    background-color: black;
    padding: 10px;
    display: flex;
    justify-content: center;
}

.map-responsive {
    position: relative;
    width: 100%;
    padding-bottom: 40%; /* smaller height */
    height: 0;
    overflow: hidden;
}

.map-responsive iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 15px; /* optional */
}

/*Footer*/
.footer {
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 20px 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
}

.social-icons-footer {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 15px;
}

.social-icons-footer img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s;
    cursor: pointer;
}

.social-icons-footer img:hover {
    transform: scale(1.2);
}

.footer-line {
    border: 0;
    height: 1px;
    background-color: #fff;
    width: 60%;
    margin: 10px auto;
}

.made-by {
    font-size: 12px;
    color: #ccc;
    margin-top: 5px;
}



/* Responsive for everything */
@media(max-width: 1024px) {
    .header {
        flex-direction: column;
        padding: 15px 20px;
        gap: 10px;
    }

    .nav {
        gap: 15px;
    }

    .b_image {
        height: 500px;
        padding: 0 30px;
    }

    .companyN {
        font-size: 36px;
    }

    .block {
        gap: 30px;
    }

    .block img {
        width: 300px;
        height: 225px;
    }

    .services-row {
        gap: 50px;
    }
}

@media(max-width: 768px) {
    .header {
        padding: 10px 15px;
    }

    .nav {
        flex-direction: column;
        gap: 10px;
    }

    .b_image {
        height: 400px;
    }

    .companyN {
        font-size: 28px;
    }

    .nameM {
        font-size: 16px;
    }

    .block img {
        width: 250px;
        height: 190px;
    }

    .service-item img {
        width: 100%;
        height: auto;
    }

    .gallery-main {
        height: 300px;
    }

    .center-img {
        width: 80%;
    }

    .side-img {
        display: none;
    }

    .thumb-row img {
        width: 80px;
        height: 50px;
    }

    .contact-container {
        flex-direction: column;
        align-items: center;
    }

    .office-image, .contact-form, .contact-info-right {
        width: 100%;
        text-align: center;
    }

    .social-icons-left {
        justify-content: center;
    }

    .contact-form .form-row {
        flex-direction: column;
    }

    #day-select, .whatsapp-btn {
        width: 100%;
    }
}



