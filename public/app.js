function redirect() {
    var dep = document.getElementById('department').value;
    var year = document.getElementById('year').value;
    if (dep == 'civ') {
        if (year == '1y') {
            window.location.href = './CIVIL/CIVIL1.html';
        } else if (year == '2y') {
            window.location.href = './CIVIL/CIVIL2.html';
        } else if (year == '3y') {
            window.location.href = './CIVIL/CIVIL3.html';
        } else if (year == '4y') {
            window.location.href = './CIVIL/CIVIL4.html';
        }
    } else if (dep == 'cse') {
        if (year == '1y') {
            window.location.href = './CSE/CSE1.html';
        } else if (year == '2y') {
            window.location.href = './CSE/CSE2.html';
        } else if (year == '3y') {
            window.location.href = './CSE/CSE3.html';
        } else if (year == '4y') {
            window.location.href = './CSE/CSE4.html';
        }
    } else if (dep == 'ece') {
        if (year == '1y') {
            window.location.href = './ECE/ECE1.html';
        } else if (year == '2y') {
            window.location.href = './ECE/ECE2.html';
        } else if (year == '3y') {
            window.location.href = './ECE/ECE3.html';
        } else if (year == '4y') {
            window.location.href = './ECE/ECE4.html';
        }
    }

    if (dep == 'eee') {
        if (year == '1y') {
            window.location.href = './EEE/EEE1.html';
        } else if (year == '2y') {
            window.location.href = './EEE/EEE2.html';
        } else if (year == '3y') {
            window.location.href = './EEE/EEE3.html';
        } else if (year == '4y') {
            window.location.href = './EEE/EEE4.html';
        }
    }

    if (dep == 'mech') {
        if (year == '1y') {
            window.location.href = './MECH/MECH1.html';
        } else if (year == '2y') {
            window.location.href = './MECH/MECH2.html';
        } else if (year == '3y') {
            window.location.href = './MECH/MECH3.html';
        } else if (year == '4y') {
            window.location.href = './MECH/MECH4.html';
        }
    }
    return false;
}