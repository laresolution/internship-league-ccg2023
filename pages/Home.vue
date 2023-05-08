<template>
    <div class="main-content">
        <div class="header-line">
            <div class="logo">
                <img class="left-logo" :alt="altLeftPartLogo" :src="srcLeftPartLogo">
                <img class="right-logo" :alt="altLogo" :src="srcLogo">
            </div>
            <div class="titre">
                <h1>{{ headerTitle }}</h1>
            </div>
        </div>
        <div class="invitation">
            <p class="invitation-text">
                {{ invitationText }}
            </p>
            <div class="banner">
                <img :alt="altBanner" id="banner" :src="srcBanner">
            </div>
        </div>
        <div class="button-join-us">
            <a href="#regform" >{{ textBtnJoinUs }}</a>
        </div>
        <div class="separateur"></div>
        <div id="regform" class="registration">
            <div class="row">
                <div class="column">
                    <h1>YOU HAVE CHOSEN THE RIGHT PATH TO YOUR SUCCESS!</h1>
                </div>
                <div class="column">
                    <div class="form">
                        <form action="/action_page.php" id="form1">
                            <label for="firstName">First name:</label>
                            <input type="text" name="firstName" v-model="firstName">
                            <label for="lasttName">Last name:</label>
                            <input type="text" name="lastName" v-model="lastName">
                            <label for="email">E-mail Address:</label>
                            <input type="email" name="email" v-model="email">
                            <label for="phoneNumber">Phone Number:</label>
                            <input type="tel" name="phoneNumber" v-model="phoneNumber">
                            <div class="row btn">
                                <input type="submit" value="Register" class="column btn-reg">
                                <a href="https://laresolution.ca/internshipleague/login/" class="column btn-login">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="menu-nav">
                <nav class="menu-nav">
                    <ul id="nav-menu" class="nav-menu">
                        <li class="menu-item">
                            <a href="https://laresolution.ca/internshipleague/" aria-current="page">Home</a>
                        </li>
                        <li class="menu-item">
                            <a href="https://laresolution.ca/internshipleague/members/">Members</a>
                        </li>
                        <li class="menu-item">
                            <a href="https://laresolution.ca/internshipleague/hire/">Hire</a>
                        </li>
                        <li class="menu-item">
                            <a href="https://laresolution.ca/internshipleague/contact/">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="copyright">
                <p>
                    <strong>Copyright © 2023 Laresolution</strong>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            headerTitle: 'Internship League',
            srcLogo: 'https://laresolution.ca/wp-content/uploads/2021/09/logo-plain512.png',
            altLogo: 'logoLeftPartLogo',
            srcLeftPartLogo: 'http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/financial-technology-40.png',
            altLeftPartLogo: 'Left Part Logo',
            srcBanner: 'http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/13762396_5330999-scaled.jpg',
            altBanner: 'Banner Join Us',
            invitationText: 'Live this collaborative experience by joining the internship league! Join like minded individuals who are as excited as you are to begin practicing their craft. Acquire the experience needed to close the junior gap and get hired by showing your work.',
            textBtnJoinUs: 'Join now',
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''

        }
    }
}
</script>

<style scoped>
.header-line {
    padding-top: 50px;
    padding-left: 50px;
    background-color: rgb(162, 90, 75);
    display:flex;
    flex-direction: row;
    align-items:center;
    
}
.left-logo {
    width: 150px;
    height: 50px;
}
.right-logo {
    width: 50px;
    height: 50px;
    margin-left: -25px;
}
.titre {
    color: white;
    margin-left: auto;
    margin-right: auto;
}
.invitation {
    background-color: rgb(162, 90, 75);
    padding-top: 50px 10%;
    display:flex;
    flex-direction: column;
    align-self:center;
}
.invitation-text {
    color: white;
    text-align: center;
    margin: 50px 25%;
}
.banner > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
}
.button-join-us{
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
}
.button-join-us > a {
    margin-top: 10px;
    margin-bottom: 50pxs;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    padding: 6px 20px;
    width: max-content;
    color: #E02B20;
    border-color: RGBA(255,255,255,0);
    border-radius: 5px;
    letter-spacing: 4px;
    font-weight: 700!important;
    text-transform: uppercase!important;
    background-color: #ffbb01;
    line-height: 1.7em;
}
.separateur {
    background-image: url("http://laresolution.ca/internshipleague/wp-content/uploads/2023/04/coding2.jpg");
    width: 100%;
    height: 350px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.registration {
    margin-top: 50px;
    padding: 10px 10%;
}
.row {
  display: flex;
}

.column {
  flex: 50%;
}
input[type=text],[type=email],[type=tel] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: solid 1px gray;
  border-radius: 2px;
  height: 40px;
}
.btn-reg {
    --wp--preset--color--black: #000000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #ffffff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
    --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
    --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
    --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
    --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
    --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
    --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
    --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
    --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
    --wp--preset--font-size--small: 13px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: 36px;
    --wp--preset--font-size--x-large: 42px;
    --wp--preset--spacing--20: 0.44rem;
    --wp--preset--spacing--30: 0.67rem;
    --wp--preset--spacing--40: 1rem;
    --wp--preset--spacing--50: 1.5rem;
    --wp--preset--spacing--60: 2.25rem;
    --wp--preset--spacing--70: 3.38rem;
    --wp--preset--spacing--80: 5.06rem;
    --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
    --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
    --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
    --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
    --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
    --wp--style--global--content-size: 823px;
    --wp--style--global--wide-size: 1080px;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased!important;
    border: none!important;
    display: block;
    line-height: 1em!important;
    padding: 16px 20px!important;
    text-decoration: none!important;
    text-align: center;
    text-transform: none!important;
    font-weight: 400!important;
    overflow: hidden;
    position: relative;
    transition: .25s;
    box-sizing: border-box;
    border-radius: 4px!important;
    color: #fff;
    vertical-align: middle!important;
    height: auto!important;
    font-size: 15px;
    cursor: pointer!important;
    width: 100%;
    box-shadow: none;
    text-shadow: none;
    font-family: inherit;
    outline: none!important;
    margin: 0;
    opacity: 1;
    -webkit-appearance: none;
    background: #3ba1da;
}
.btn-login {
    --wp--preset--color--black: #000000;
    --wp--preset--color--cyan-bluish-gray: #abb8c3;
    --wp--preset--color--white: #ffffff;
    --wp--preset--color--pale-pink: #f78da7;
    --wp--preset--color--vivid-red: #cf2e2e;
    --wp--preset--color--luminous-vivid-orange: #ff6900;
    --wp--preset--color--luminous-vivid-amber: #fcb900;
    --wp--preset--color--light-green-cyan: #7bdcb5;
    --wp--preset--color--vivid-green-cyan: #00d084;
    --wp--preset--color--pale-cyan-blue: #8ed1fc;
    --wp--preset--color--vivid-cyan-blue: #0693e3;
    --wp--preset--color--vivid-purple: #9b51e0;
    --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);
    --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);
    --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);
    --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);
    --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);
    --wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);
    --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);
    --wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);
    --wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);
    --wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);
    --wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);
    --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
    --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
    --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
    --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
    --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
    --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
    --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
    --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
    --wp--preset--font-size--small: 13px;
    --wp--preset--font-size--medium: 20px;
    --wp--preset--font-size--large: 36px;
    --wp--preset--font-size--x-large: 42px;
    --wp--preset--spacing--20: 0.44rem;
    --wp--preset--spacing--30: 0.67rem;
    --wp--preset--spacing--40: 1rem;
    --wp--preset--spacing--50: 1.5rem;
    --wp--preset--spacing--60: 2.25rem;
    --wp--preset--spacing--70: 3.38rem;
    --wp--preset--spacing--80: 5.06rem;
    --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
    --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
    --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
    --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
    --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
    --wp--style--global--content-size: 823px;
    --wp--style--global--wide-size: 1080px;
    font-family: Open Sans,Arial,sans-serif;
    margin: 0;
    outline: 0;
    -webkit-text-size-adjust: 100%;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased!important;
    font-size: 15px;
    border: none!important;
    display: block;
    width: 100%;
    line-height: 1em!important;
    padding: 16px 20px!important;
    text-decoration: none!important;
    text-align: center;
    text-transform: none!important;
    font-weight: 400!important;
    overflow: hidden;
    position: relative;
    transition: .25s;
    box-sizing: border-box;
    border-radius: 4px!important;
    box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,8%);
    opacity: 1;
    background: #eee;
    color: #666;
}
.btn {
    padding: 10px;
}
.footer {
    background: #8A817C;
    margin-top: 50px;
    padding: 50px 50px 0px;
}
.menu-nav {
    padding: 0 15%;
}
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
}
li > a {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 2px;
}
.copyright{
    padding: 50px;
}
</style>