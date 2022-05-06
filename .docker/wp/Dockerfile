FROM wordpress:latest

RUN apt-get update && apt-get install -y \
vim

# CMD echo -e "\n\
#   // preview for next.js\n\
#   add_action("template_redirect", function () {\n\
#   if (\!is_admin() && isset($_GET["preview"]) && $_GET["preview"] == true) {\n\
#   $redirect = add_query_arg(\n\
#   [\n\
#   "id" => $_GET["preview_id"] ? $_GET["preview_id"] : $_GET["p"],\n\
#   ],\n\
#   "http://localhost:3030/preview"\n\
#   );\n\
#   wp_redirect($redirect);\n\
#   }\n\
#   });\n\
# " >> /var/www/html/wp-content/themes/twentytwentytwo/functions.php