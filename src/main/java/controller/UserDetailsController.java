package controller;

import entities.UserDetails;
import service.OpenAccountService;


public class UserDetailsController {

    private final OpenAccountService userDetailsService;

    @Autowired
    public UserDetailsController(OpenAccountService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @GetMapping("/openAccount")
    public String showOpenAccountForm(Model model) {
        // Add an empty UserDetails object to the model for binding form data
        model.addAttribute("userDetails", new UserDetails());
        return "OpenAccountForm"; // Replace with the name of your JSP form file
    }

    @PostMapping("/submitForm")	
    public String submitForm(@ModelAttribute("userDetails") UserDetails userDetails) {
        // Call the service layer to save the UserDetails
        userDetailsService.saveUserDetails(userDetails);

        // Redirect to the next page after successful save
        return "NextPage"; // Replace with the name of your next JSP file
    }
}
