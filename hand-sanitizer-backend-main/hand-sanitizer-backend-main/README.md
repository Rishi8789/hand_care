
# HAAN hand-care-Backend

# Description
<h3>hand-sanitizer-backend is the server-side component of the HAAN hand care project, providing APIs for user authentication, product management, and user address details. The backend is built using Node.js, Express, and MongoDB.</h3>


 # Url --->   https://haan-hand-cares.onrender.com/


# Table of Contents
<h3>
 <ul>
 <li>Installation</li>
  <li>Usage</li>
  <li>Endpoints</li>
  <li>Contributing</li>
  <li>License</li>
</ul>
</h3>

<h2>Installation</h2>
git clone <github-repo-url>

# Endpoints for User Authentication
<h2>POST /user/signup</h2>



<h2>POST /user/login</h2>


# Endpoints for Getting the data 
url/handcare 





 <h2>Sorting</h2>    
 <h3>Sort in Ascending Order</h3>
 <h4>Example Sorting By price</h4>
<p>url/handcare?sortBy=price&order=asc  </p>
<br/>
 <h3>Sort in Descending Order</h3>
 <h4>Example sorting by title</h4>
<p>url/handcare?sortBy=name&order=desc  </p>

 <h2>Pagination</h2>    
 <h4>Example for Pagination</h4>
<p>url/handcare?page=1&limit=10  </p>

 <h2>Pagination and Sorting together</h2>    
  <h3>Sort in Ascending Order</h3>
<p>url/handcare?page=1&limit=3&sortBy=price&order=asc</p>
<br/>

  <h3>Sort in Descending Order</h3>
<p>url/handcare?page=1&limit=3&sortBy=price&order=desc</p>


<h2>Filtering the Product according to key and value</h2>
<p>url/handcare?name=Hydrating Hand Sanitizer & Lanyard Pack - Margarita Spirit</p>

<h2>Searching </h2>
<h4>You can search anything with this url and query Search is not case sensitive </h4>

<p>url/handcare?q=pandora</p>





# Endpoints for User Address

 <h1>To get all the address refer this url</h1>
<h2>GET /user/addresses</h2>
<br/>
<br/>


<h2>You have to pass these field to create user Address to this url</h2>




<h2>PATCH /user/address/edit/:id</h2>
<h4>Pass id for edit the address and necessary data with valid key which is already present </h4>


<h2>DELETE /user/address/delete/:id</h2>
<h4>Pass id for deleting the address </h4>