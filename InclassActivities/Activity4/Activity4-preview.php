<!DOCTYPE html>

<html lang="tr">
    <head>
        <title>Activity4-preview</title>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    </head>

    <body>
        <?php 
            if(empty($_POST["name"])==false)
            {
                echo $_POST["name"]; 
            }
            else
            {
                echo "Not Provided";
            }
        ?>
        
        <br>
            
        <?php 
            if(empty($_POST["username"])==false)
            {
                echo $_POST["username"]; 
            }
            else
            {
                echo "Not Provided";
            }
        ?>

        <br>

        <?php 
            if(empty($_POST["password"])==false)
            {
                echo $_POST["password"]; 
            }
            else
            {
                echo "Not Provided";
            }
        ?>

        <br>

        <?php 
            echo "Address: ";
            if(empty($_POST["adress"])==false)
            {
                echo $_POST["adress"]; 
            }
            else
            {
                echo "Not Provided";
            }
        ?>

        <br>

        <?php 
            if(empty($_POST["country"])==false)
            {
                echo $_POST["country"]; 
            }
            else
            {
                echo "Not Provided";
            }
        ?>
        

        <br>

        <?php 
            if(empty($_POST["zipcode"])==false)
            {
                echo $_POST["zipcode"]; 
            }
            else
            {
                echo "Not Provided";
            }
        ?>
        

        <br>

        <?php 
            if(empty($_POST["email"])==false)
            {
                echo $_POST["email"]; 
            }
            else
            {
                echo "Not Provided";
            }
        ?>
        

        <br>

        <?php 
            if(empty($_POST["language1"])==false)
            {
                echo $_POST["language1"]; 
            }
            
            if(empty($_POST["language2"])==false)
            {
                echo $_POST["language2"]; 
            }

            if(empty($_POST["language3"])==false)
            {
                echo $_POST["language3"]; 
            }

        ?>
        

        <br>

        <?php 
        echo "About: "; 
            if(empty($_POST["about"])==false)
            {
                echo $_POST["about"]; 
            }
            else
            {
                echo "Not Provided";
            }
        ?>
        

        <br>
        

    </body>
</html>