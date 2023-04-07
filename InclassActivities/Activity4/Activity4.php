<!DOCTYPE html>

<html lang="tr">
    <head>
        <title>Activity4</title>
        <link rel="stylesheet" type="text/css" href="Activity4.css">
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    </head>

    <body>
        
        <form action="Activity4-preview.php" method="post">
            <div>
                <label for="name">Name: </label>
                <input type="text" name="name">      
            </div>

            <div>
                <label for="username">Username: </label>
                <input type="text" name="username">      
            </div>

            <div>
                <label for="password">Password: </label>
                <input type="password" name="password">      
            </div>

            <div>
                <label for="adress">Adress: </label>
                <input type="text" name="adress">      
            </div>

            <div>
                <label for="country">Country: </label>
                <select name="country" id="country">
                    <option value="">(Please select a country)</option>
                    <option value="Tukey">Turkey</option>
                    <option value="USA">USA</option>
                    <option value="England">England</option>
                    <option value="Germany">Germany</option>
                </select>    
            </div>

            <div>
                <label for="zipcode">Zip Code: </label>
                <input type="text" name="zipcode">      
            </div>

            <div>
                <label for="email">Email: </label>
                <input type="text" name="email">      
            </div>

            <div>
                <label for="sex">Sex: </label>
                
                <input type="radio" name="sex" value="male" />
                <label for="sexChoice1">Male</label>

                <input type="radio" name="sex" value="Female" />
                <label for="sexChoice2">Female</label>
            </div>

            <div>
                <label for="language">Language: </label>
                
                <input type="checkbox" name="language1" value="English" />
                <label for="language1">English</label>

                <input type="checkbox" name="language2" value="French" />
                <label for="language2">French</label>
                
                <input type="checkbox" name="language1" value="Germany" />
                <label for="language1">Germany</label>

            </div>

            <div>
                <label for="about">About: </label>
                <textarea name="about"></textarea> 
            </div>

            <div>
                <button type="submit" value="Submit">Submit</button>
            </div>

        </form>

    </body>
</html>