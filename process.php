<?php 

    if(isset($_POST['btn-send']))
    {
       $UserName = $_POST['uname'];
       $Email = $_POST['mail'];
       $Subject = $_POST['subject'];
       $Msg = $_POST['message'];

       $mailTo = "rehanedin@gmail.com";
       $headers = "From: ".$mailFrom;
       $txt = "You have received a new email from " . $UserName.".\n\n".$Msg;

       mail($mailTo, $Subject, $txt, $headers);
      // header("Location: index.php?mailsent");


    }


      /* if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
       {
           header('location:index.php?error');
       }
       else
       {
           $to = "admin@onlineittuts.com";

           if(mail($to,$Subject,$Msg,$Email)){
            header("location:index.php?success");
        }
    }
 }
 else
 {
     header("location:index.php");
 }*/
?>