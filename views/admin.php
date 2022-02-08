<?php
$subscriptions = allSubscriptions();
// Debug subscriptions array
//print_r($subscriptions);
?>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Admin</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div class="d-flex">
                <a href="logout.php" style="text-decoration: none; color: grey;">Log out</a>
            </div>
        </div>
    </div>
</nav>
<main role="main" class="container pt-3">
    <h1>My subscribers</h1>
    <table class="table table-striped table-sm">
        <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Comment</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <?php foreach ($subscriptions as $index => $subscription): ?>
            <tr>
                <td><?= $index + 1 ?></td>
                <td><?= $subscription['first_name'], $subscription['last_name'] ?></td>
                <td><?= $subscription['comment'] ?></td>
                <td><?= $subscription['email'] ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
</main>
