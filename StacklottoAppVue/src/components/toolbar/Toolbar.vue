<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="toolbar">
      <b-container>
        <b-navbar-brand href="#">
          <img src="../../assets/images/stack_logo.png" class="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
         
        <div class="ml-auto hidden-xs">
            <template v-if="user == null">
            <b-form inline @submit.prevent="callSignIn">
              <b-form-input class="input mr-2" required v-model="username" placeholder="Email" size="sm" type="email"/>
              <b-form-input class="input mr-2" required v-model="password" placeholder="Password" size="sm" type="password"/>
              <b-button class="btn" :disabled="signingIn" type="submit" size="sm">Sign In</b-button>
            </b-form>
            <router-link class="form-link mr-4" to="/forgot">Forgot Password?</router-link>
            <router-link class="form-link" to="/register">Register</router-link>
          </template>
          <template v-else>
            <span class="draw-2" style="color: white">Logged in as {{user.email}} | ₦{{user.balance.toFixed(2)}}</span>
            <b-button class="btn ml-3" size="sm" @click="callSignOut" v-if="$route.path.startsWith('/dashboard')">Sign Out</b-button>
            <b-button class="btn ml-3" size="sm" to="/dashboard" v-else>Account</b-button>
          </template>
        </div>
      </b-container>
    </b-navbar>
    <b-navbar toggleable="lg" type="dark" class="toolbar">
      <b-container>
        <b-collapse id="nav-collapse" is-nav>
          <div class="ml-auto hidden-sm-and-up">
            <template v-if="user == null">
            <b-form inline @submit.prevent="callSignIn">
              <b-form-input class="input mr-2" required v-model="username" placeholder="Email" size="sm" type="email"/>
              <b-form-input class="input mr-2" required v-model="password" placeholder="Password" size="sm" type="password"/>
              <b-button class="btn" :disabled="signingIn" type="submit" size="sm">Sign In</b-button>
            </b-form>
            <router-link class="form-link mr-4" to="/forgot">Forgot Password?</router-link>
            <router-link class="form-link" to="/register">Register</router-link>
          </template>
          <template v-else>
            <span class="draw-2" style="color: white">Logged in as {{user.email}} | ₦{{user.balance}}</span>
            <b-button class="btn ml-2" size="sm" to="/dashboard">Account</b-button>
          </template>
        </div>
          <b-navbar-nav class="navbar-nav">
            <router-link class="nav-item" to="/">HOME</router-link>
            <router-link class="nav-item" to="/lotteries">LOTTERIES</router-link>
            <div class="dropdown-container">
              <router-link class="nav-item" to="">RESULTS AND WINNINGS</router-link>
              <i class="mdi mdi-menu-down menu-icon"></i>
              <div class="dropdown">
                  <div class="list-item"><b-link class="nav-link" to="/results?l=draws">DRAWS</b-link></div>
                  <div class="list-item"><b-link class="nav-link" to="/results?l=649">Stacklotto 649</b-link></div>
                  <div class="list-item"><b-link class="nav-link" to="/results?l=425">Stacklotto 425</b-link></div>
                  <div class="list-item"><b-link class="nav-link" to="/results?l=lucky5">Lucky5</b-link></div>
                  <div class="list-item"><b-link class="nav-link" to="/results?l=match4">Match 4</b-link></div>
                  <div class="list-item"><b-link class="nav-link" to="/results?l=match3">Match 3</b-link></div>
                  <div class="list-item"><b-link class="nav-link" to="/results?l=match2">Match 2</b-link></div>
              </div>
            </div>
            <router-link class="nav-item" to="/check-ticket">CHECK TICKET</router-link>
            <div class="dropdown-container">
              <router-link class="nav-item" to="">BLOG PAGES</router-link>
              <i class="mdi mdi-menu-down menu-icon"></i>
              <div class="dropdown">
                  <div class="list-item">Blog Page</div>
                  <div class="list-item">Blog Single</div>
              </div>
            </div>
            <router-link class="nav-item" to="/faq">FAQ</router-link>
            <router-link class="nav-item" to="/contact">CONTACT US</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script src="./Toolbar.ts"></script>

<style scoped>
.toolbar {
  background-color: #091b41;
}

.logo {
  width: 270px;
}

.nav-item {
  font-family: nunito;
  color: white;
  font-weight: bold;
  display: inline-block;
  margin: 1em;
  transition: color .2s linear;
}

.nav-item:hover {
  color: #04a2ee;
  text-decoration: none;
}

.navbar-nav {
  margin-left: 6.2em
}

.input{
  background-color: #04a2ee;
  border-color: black;
  color: white;
  outline: none;
}

.input::placeholder {
  color: rgba(0,0,0,0.9)
}

.btn {
  background-image: linear-gradient( 90deg, rgb(1,141,239) 0%, rgb(0,184,234) 100%, rgb(255,237,0) 100%);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.22);
  font-size: 14px;
  text-transform: capitalize;
  color: #ffffff;
  outline: none;
  border: none
}

.form-link {
  font-family: nunito;
  color: #04a2ee;
  font-size: 13px;
  font-weight: 600;
}

.form-link:hover {
  text-decoration: none;
}

.dropdown{
  position: absolute;
  width: 100%;
  font-family: nunito;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 10px 10px rgba(0,0,0,.2);
  visibility: hidden;
  opacity: 0;
  transition: visibility .2s linear, opacity .2s linear;
  z-index: 2;
}

.dropdown-container {
  position: relative;
}

.dropdown-container:hover .dropdown {
  visibility: visible;
  opacity: 1;
}

.dropdown-container .menu-icon {
  font-size: 26px;
  color: white;
  display: inline-block;
  transition: transform .2s linear;
}

.dropdown-container:hover .menu-icon {
  transform: rotateZ(180deg) !important;
  color:#04a2ee;;
}

.list-item {
  padding: .5em;
  transition: all .2s linear;
  cursor: pointer;
  color: rgba(0,0,0,0.9) !important;
  text-decoration: none !important;
}

.list-item:hover {
  color: #04a2ee;
  background-color: rgba(0,0,0,0.2);
}

.list-item:hover .nav-link {
  text-decoration: none !important;
  color: black;
}

.list-item .nav-link {
  color: black;
}
</style>