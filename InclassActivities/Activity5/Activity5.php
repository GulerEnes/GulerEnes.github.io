<!DOCTYPE html>

<html lang="tr">
    <head>
        <title>Activity4</title>
        <link rel="stylesheet" type="text/css" href="Activity5.css">
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    </head>

    <body>
        <form action="Activity5.php" method="post">
            <div class="row">
                <div class="left">
                    <label for="from">From: </label>
                    <input type="text" name="from" value="<?php if($_POST["from"] == "") echo "0";else echo $_POST["from"];?>"> 
                </div>
                
                <div class="right">
                    <label for="currency-from">Currency: </label>
                    <select name="currency-from" class="currency-select-box">
                        <option value="USD" <?php if($_POST["currency-from"] == "USD") echo "selected";?>>US Dollar</option>
                        <option value="CAD" <?php if($_POST["currency-from"] == "CAD") echo "selected";?>>Canadian Dollar</option>
                        <option value="EUR" <?php if($_POST["currency-from"] == "EUR") echo "selected";?>>Euro</option>
                    </select>  
                </div>
                
            </div>

            <div class="row">
                <div class="left">
                    <label for="to">To: </label>
                    <span id="to-span">
                        <?php
                           $arr = array(
                            "USD" => array(
                                "USD" => 1,
                                "CAD" => 1.36,
                                "EUR" => 0.91
                            ),
                            "CAD" => array(
                                "CAD" => 1,
                                "USD" => 0.74,
                                "EUR" => 0.68
                            ),
                            "EUR" => array(
                                "EUR" => 1,
                                "USD" => 1.10,
                                "CAD" => 1.47
                            )
                        ); 

                            $amount_from = floatval($_POST["from"]);

                            $amount_to = $amount_from * $arr[$_POST["currency-from"]][$_POST["currency-to"]];

                            echo "".$amount_to;
                        ?>
                    </span>
                    
                </div>

                <div class="right">
                    <label for="currency-to">Currency: </label>
                    <select name="currency-to" class="currency-select-box">
                        <option value="USD" <?php if($_POST["currency-to"] == "USD") echo "selected";?>>US Dollar</option>
                        <option value="CAD" <?php if($_POST["currency-to"] == "CAD") echo "selected";?>>Canadian Dollar</option>
                        <option value="EUR" <?php if($_POST["currency-to"] == "EUR") echo "selected";?>>Euro</option>
                    </select> 
                </div>
                 
            </div>

            <div>
                <button type="submit" value="Convert">Convert</button>
            </div>
        </form>
    </body>

</html>